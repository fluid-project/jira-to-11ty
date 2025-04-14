---json
{
  "title": "FLUID-6610",
  "summary": "Panel index update through rendering can race against preference saving in separatedPanelPrefsEditor tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-03-29T09:46:42.388-0400",
  "updated": "2024-07-17T08:10:19.293-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of an entirely unrelated update purely affecting styling, a relatively consistent race was introduced in the SeparatedPanel prefs editor tests in <https://github.com/fluid-project/infusion/pull/1042>

This lost fairly consistently in Firefox on Ubuntu and sometimes on MacOS.

The "old" framework (prior to FLUID-6148 update) would tend to race model updates on initialisation. In order to make the test reliable, we should restrict the test to only compare the part of the model that contains preferences - 

e.g. to change this line <https://github.com/fluid-project/infusion/blob/main/tests/framework-tests/preferences/js/SeparatedPanelPrefsEditorTests.js#L149> to read

```java
jqUnit.assertDeepEq("Only the changed preferences are saved", fluid.tests.prefs.bwSkin.preferences, storedSettings.preferences);
```

 

        