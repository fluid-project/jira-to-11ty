---json
{
  "title": "FLUID-5885",
  "summary": "Component context for {that} in indirect model listener is incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-04-12T16:37:39.051-0400",
  "updated": "2024-07-22T09:27:11.013-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-04-18T21:45:47.451-0400",
      "body": "Test case demonstrating absence is at <https://github.com/fluid-project/infusion/pull/702> - this failure is a priori impossible and must have been observed in a fit of madness\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5848#icft=FLUID-5848> implemented support for indirect model references (that is, those where the path segment "model" did not appear in the head position after the component context reference). Unfortunately this exposed an assumption/bug in the dispatch pathway - that the component where the listener is to be registered is the same as that where the reference is written. The following configuration:

```javascript
fluid.defaults("onward.adaptation", {
        gradeNames: "fluid.modelComponent",
        components: {
            button: {
                type: "fluid.button",
            }
        },
        modelListeners: {
            "{that}.button.model.pressed": {
                namespace: "toggleAdaptation",
                funcName: "onward.toggleAdaptationContext",
                args: ["{change}.value", "{that}.options.contextGrade"]
            }
        }
    });
```

surprises the user because the value of `&#123;that&#125;` when resolving `&#123;that&#125;.options.contextGrade` refers to the button (at path `&#123;that&#125;.button`) rather than the context where it is written, being `onward.adaptation`

        