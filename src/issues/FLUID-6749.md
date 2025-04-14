---json
{
  "title": "FLUID-6749",
  "summary": "Stop using iframe to render preferences editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2022-09-13T11:09:23.741-0400",
  "updated": "2024-07-22T10:35:29.617-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5218/",
      "key": "FLUID-5218",
      "summary": "Prefs editor requires iFrame template to be in same place as panel templates; it probably shouldn't"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The current UI options renders preferences editor in an \<iframe>. This applies to separated panel UIO and with preview UIO. \<iframe> provides a separate html that is not affected by the enhancer on the main page when preferences are applied to it.

This isolation can be achieved via CSS variables (custom properties), which will greatly simplify the javascript code and css definitions. This solution is proved workable in [Antranig's infusion 5 work](https://github.com/amb26/new-renderer-demo/tree/FLUID-5047).

        