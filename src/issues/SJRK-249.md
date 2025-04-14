---json
{
  "title": "SJRK-249",
  "summary": "Adding content to individual partner's page using Netlify causes background image to scale up",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Michelle D'Souza",
  "reporter": "Dana",
  "date": "2019-06-06T15:30:43.958-0400",
  "updated": "2019-07-09T13:25:22.752-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "SoJustRepairIt.org"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-249/SJRK background issue.png",
      "filename": "SJRK background issue.png"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2019-06-10T12:27:43.419-0400",
      "body": "also noticed that the background image scales up when any of the UIO sizing preferences are set (font size, line spacing, enhance inputs)\n"
    },
    {
      "author": "Dana",
      "date": "2019-07-09T13:23:51.024-0400",
      "body": "Latest fix has caused the background image to repeat more than once, as seen on the right hand edge of the attached image. Can we fix it so that the background image repeats just once?\n"
    }
  ]
}
---
Each time content or images are added to an individual partner's page (in this case the FUTCO contributions page), the background image is getting stretched.

 

Compare <https://www.sojustrepairit.org/partners/futco/>\
to <https://www.sojustrepairit.org/partners/>

        