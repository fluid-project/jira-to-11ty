---json
{
  "title": "FLUID-5942",
  "summary": "Separated Panel Preferences Editor rendering tests fail in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-08-12T09:06:32.801-0400",
  "updated": "2016-08-24T10:29:59.198-0400",
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
      "url": "/browse/FLUID-5927/",
      "key": "FLUID-5927",
      "summary": "The composite panel tests in the SeparatePanel Test Suite do not run in Safari"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-08-12T11:40:18.684-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/734> has been merged into the master branch at c8b42b771121e05a2ee08825115eb6a0804c0337\n"
    }
  ]
}
---
This seems to be a bug with the actual test where the [call to assertDeepEq](https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/preferences/js/SeparatedPanelPrefsEditorTests.js#L350) to compare document contexts throws a type error. A simpler test comparing the contexts URL may be enough.

Steps to reproduce:

1\) Open the Separated Panel Prefs Editor tests in Safari\
<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/SeparatedPanelPrefsEditor-test.html>

Notice that the "Prefs editor with composite panel: Rendering" test doesn't complete and throws a "type error"

        