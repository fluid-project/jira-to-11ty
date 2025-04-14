---json
{
  "title": "FLUID-5926",
  "summary": "Provide an option to lazy load the separated prefs editor panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-07-07T01:54:28.439-0400",
  "updated": "2019-07-12T09:15:15.134-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To help with the initial page load performance for sites using UIO or an instance of a separated panel prefs editor, provide an option to lazy load the separated prefs editor. On page load the separated panel's "tab" ( sliding panel ) should be instantiated, but the prefs editor itself should not be instantiated until after the tab is triggered to be open.&#x20;

Things to lazy load

* initialization of prefs editor
* templateLoader
* messages for the panels, although the message for the prefsEditor loader is needed to render the text on the "tab" (sliding panel).

        