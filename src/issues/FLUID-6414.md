---json
{
  "title": "FLUID-6414",
  "summary": "Not possible to contribute a dynamic grade via an expander",
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
  "date": "2019-10-19T03:44:33.793-0400",
  "updated": "2024-07-22T10:35:22.511-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
For a while our only means of contributing so-called "raw" dynamic grades has been either i) via a direct IL reference to the grade(s), or ii) to a nullary function which returns such a grade(s). \
Docs at <https://docs.fluidproject.org/infusion/development/ComponentGrades.html#raw-dynamic-grades>

Route ii) is a bit odd-looking and baroque, and cuts off the possibility for easily supplying arguments which is fairly common in newer cases with lensed components whose grade should depend on material in the source. We should at least allow expressions like this:

```java
dynamicComponents: {
            element: {
                type: "gpii.psp.repeater.element",
                sources: "{repeater}.model.items",
                options: {
                    gradeNames: "@expand:{gpii.psp.repeater}.getElementGrade({that}.options.source)",
```

Note that for full support we need to implement some form of Queen of Sheba adaptation for components whose grade CHANGES as a result of change in model material. This requires a wholly new mechanism to destroy and reinstantiate the component without attempting to blast its source model material in the "unobservable gap".

        