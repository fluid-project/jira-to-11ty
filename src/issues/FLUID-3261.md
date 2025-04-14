---json
{
  "title": "FLUID-3261",
  "summary": "Renderer demo does not format nicely in IE7 & IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Laurel Williams",
  "date": "2009-10-08T13:43:11.000-0400",
  "updated": "2014-06-25T15:55:53.292-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Renderer"
  ],
  "environment": "IE 7 (Win XP, Win Vista)\\\nIE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3261/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-08T13:56:48.000-0400",
      "body": "You can see here that the model is not to the right of the rendered page, and that the html is not at all nicely formatted.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:53.260-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
On initial display, the renderer demo does not look at all nice. The html has no formatting or breaks, the model cannot be found (it is at the bottom of the html block, etc. I will attach a screen shot.

        