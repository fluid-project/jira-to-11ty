---json
{
  "title": "FLUID-6697",
  "summary": "Failure on model relay to nested component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-11-19T12:10:53.636-0500",
  "updated": "2024-07-17T08:08:37.807-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-11-22T13:49:02.199-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1065> ) into the project repo at a52671122fdc3d34c3b029b0e294823a9bfc454d\n"
    }
  ]
}
---
Applying a direct model relay to a nested component when working with the reworked TextfieldControls caused the value to get lost.

The following delivered no value:

```java
fluid.defaults("fluid.textfieldSlider", {
    gradeNames: ["fluid.newRendererComponent"],
    modelRelay: {
        ariaLabelledBy: {
            target: "{slider}.model.dom.container.attrs.aria-labelledby",
            source: "{that}.options.ariaLabelledBy"
        },
....
    components: {
        slider: {
            type: "fluid.slider",
            container: "{textfieldSlider}.dom.slider",
            options: {
                model: "{textfieldSlider}.model",
....
```

whereas writing the definition inline on the nested component with&#x20;

```java
slider: {
            type: "fluid.slider",
            container: "{textfieldSlider}.dom.slider",
            options: {
                model: "{textfieldSlider}.model",
                modelRelay: {
                    ariaLabelledBy: {
                        target: "dom.container.attrs.aria-labelledby",
                        source: "{textfieldSlider}.options.ariaLabelledBy"
                    }
                }
            }
        }
```

was fine

        