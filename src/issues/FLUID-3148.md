---json
{
  "title": "FLUID-3148",
  "summary": "Add page for \"your download will be available shortly\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-01T15:39:09.000-0400",
  "updated": "2009-10-22T16:24:38.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-09-02T15:24:54.000-0400",
      "body": "Added and changed the following:\n\nAdded a new div to CustomBuild.html with a download message in it. Moved the download form into the #customBuild div\\\nAdded css class to new div to hide the download message initially.\\\nAdded code to builder.js to toggle the #customBuild div to 'hidden' and the new div to 'shown'\n\nNot sure if this is the best place to do this or if some of the functionality should be in the component itself...am hoping that the reviewer will comment on this.\n"
    }
  ]
}
---
Find a way to provide simple feedback mechanism while building.

        