---json
{
  "title": "FLUID-2386",
  "summary": "UI Options dialog needs to scale with font size",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-03-19T16:50:54.000-0400",
  "updated": "2009-03-20T14:48:50.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2386/scalable uioptions dialog.patch",
      "filename": "scalable uioptions dialog.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-20T09:46:35.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-20T10:42:47.000-0400",
      "body": "I tested this and reviewed the code. This is a huge improvement.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T14:48:50.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
When the font size is very large, the dialog needs to scale up, and maintain a decent position on screen.

        