---json
{
  "title": "FLUID-542",
  "summary": "HTML formating not working for Design Pattern content type",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-28T14:45:15.000-0400",
  "updated": "2014-03-04T09:07:15.021-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-569/",
      "key": "FLUID-569"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-04-30T14:07:38.000-0400",
      "body": "All relevant CCK fields now have Filtered text input option.\n"
    }
  ]
}
---
In the OSPL, HTML formatting is broken for the Design Pattern content type. HTML tags are being saved, but the output is being escaped when content is viewed.

This problem doesn't occur is you create a Page or Story content type... HTML is properly rendered.

        