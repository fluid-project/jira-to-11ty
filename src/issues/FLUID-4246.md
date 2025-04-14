---json
{
  "title": "FLUID-4246",
  "summary": "Image reorderer has unexpected link on container div",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2011-05-16T14:02:41.283-0400",
  "updated": "2015-06-26T10:05:48.992-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:06.564-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Load <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>\
Tab to first item\
Shift-tab to focus the container\
Hit enter\
Dragonfruit.jpg loads

Prob shouldn't focus OR link to anything.

        