---json
{
  "title": "FLUID-58",
  "summary": "Lightbox \"Discovery Note\" is cryptic for mouse users",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Eli Cochran",
  "reporter": "Daphne Ogle",
  "date": "2007-10-11T17:57:41.000-0400",
  "updated": "2007-11-14T13:44:45.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-58/Discovery note.jpg",
      "filename": "Discovery note.jpg"
    }
  ],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2007-10-11T17:59:40.000-0400",
      "body": "Screen shot of current note\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2007-11-14T13:44:45.000-0500",
      "body": "Logged as: GAL-64 <http://jira.sakaiproject.org/jira/browse/GAL-64> assigned to Eli Cochran\n"
    }
  ]
}
---
The discovery note that displays the first few times a user visit the Gallery explains how to use keyboard only interactions but not mouse drag and drop.  The message isn't specific that it is referring to keyboard interactions and could be misleading – making the user think the keyboard is the only way to move images.  Message reads "View an image by pressing Enter. Move an image using CTRL+Arrow Key." which is nice a concise.  Could we change it to include mouse interaction description too?  Something like, "To view an image use mouse click or press enter.  To move an image use mouse click and drag or CTRL+ Arrow Keys".

        