---json
{
  "title": "FLUID-6347",
  "summary": "Wordspace panel has misspelled grade name and error in tests.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-10-18T09:52:57.677-0400",
  "updated": "2024-07-22T10:35:13.025-0400",
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
The word space panel has "fluid.prefs.panel.stepperAjuster" misspelled ( <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/WordSpacePanel.js#L25> ).

Also the test references jquery-ui.js which no longer exists. 

<https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/preferences/html/WordSpacePanel-test.html#L11>

        