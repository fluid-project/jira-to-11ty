---json
{
  "title": "FLUID-5927",
  "summary": "The composite panel tests in the SeparatePanel Test Suite do not run in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-07-11T10:27:18.092-0400",
  "updated": "2016-08-24T10:30:09.013-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5942/",
      "key": "FLUID-5942"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1. In Safari open SeparatedPanel Preferences Editor Test Suite

* <http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/SeparatedPanelPrefsEditor-test.html>

Notice that the "Prefs editor with composite panel: Rendering" test does not complete. The console indicates that it timed out and there is an error from qunit.js line 83 ( TypeError: Type Error ).

        