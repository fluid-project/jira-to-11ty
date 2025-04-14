---json
{
  "title": "FLUID-6408",
  "summary": "Obnoxiously instantiated free component may disrupt workflow evaluation",
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
  "date": "2019-10-09T07:04:54.562-0400",
  "updated": "2024-07-22T10:35:05.464-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This issue only affects the in-progress FLUID-6148.\
Although the technique is strongly discouraged and will soon be forbidden, the framework currently permits a component creator function to be invoked by an expander. This creates a likely memory leak since the component will not be torn down by ordinary destruction of the component tree, and also does not participate in reference resolution.\
The technique is currently in use in the preferences framework's tests <https://github.com/amb26/infusion/blob/FLUID-6148/tests/framework-tests/preferences/js/PanelTestUtils.js>\
which include

```java
fluid.defaults("fluid.tests.panels.utils.defaultTestPanel", {
        gradeNames: "fluid.resourceLoader",
        strings: {},
        testMessages: {},
        parentBundle: {
            expander: {
                funcName: "fluid.messageResolver",
                args: [{messageBase: "{that}.options.testMessages"}]
            }
        }
    });
```

Whilst we curse this technique, it's important to ensure that the workflow algorithm is robust in the face of it. The issue is that our "stack of sequences" approach allows actions kicked off during concludeComponentObservation of one component to run ahead on the next "stack frame".

In fact we need a "hybrid time" approach whereby all workflow phases before concludeComponentInit proceed "orthochronously" according to the planned Qix flooding (that is, reusing the same sequence) and new sequences only get allocated by concludeComponentInit itself. This restores the view that a component constructed during createOnEvent is fully constructed by the time the event handler returns (the original purpose of having the sequence stack in the first place) but that all prior workflow phases retain their proper sequencing amongst each other.

        