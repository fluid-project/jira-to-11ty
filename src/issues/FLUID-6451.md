---json
{
  "title": "FLUID-6451",
  "summary": "UIOptions tests have environmental dependency on cookie values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2020-01-31T09:34:39.398-0500",
  "updated": "2024-07-22T10:35:18.736-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The UIOptions tests at <https://github.com/fluid-project/infusion/blob/master/tests/component-tests/uiOptions/js/UIOptionsTests.js> have an environment dependency on the state of the browser's cookies, since the default distribution via contextAwareness for any fluid.prefs.store is fluid.prefs.cookieStore at <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/Store.js#L23>

This can cause a test failure if, for example, there are dirty cookies from a previous test which have enabled the ToC preference. This exposes the fact that the  "fluid.tests.uiOptions.prefsEditorLocalizedTest" in UIOptionsTests.js comes "out of the box" with an invalid path to the ToC template.

We should fix at least one of the following two things - 

i) Ensure that every test case makes use of the fluid.prefs.tempStore store unless it is explicitly testing the cookie store

ii) Fix up the template paths for the UIOptions tests so that the ToC path is valid

        