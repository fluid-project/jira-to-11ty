---json
{
  "title": "FLUID-5740",
  "summary": "Separated panel events binding should be more declarative",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Kaye Mao",
  "date": "2015-08-12T13:27:23.252-0400",
  "updated": "2017-01-19T11:23:28.993-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5988/",
      "key": "FLUID-5988"
    }
  ],
  "attachments": [],
  "comments": []
}
---
In infusion/src/framework/preferences/js/SeparatedPanelPrefsEditor.js, the fluid.prefs.separatedPanel.bindEvents function should be written more declaratively.

        