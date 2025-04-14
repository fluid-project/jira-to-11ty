---json
{
  "title": "FLUID-3695",
  "summary": "Fluid parser line 159: trim is called on a string which will work in FF but will break in IE, since it should actually use jQuery.trim",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2010-08-30T11:32:24.135-0400",
  "updated": "2014-04-02T15:24:55.653-0400",
  "versions": [
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3695/FLUID-3695.patch.txt",
      "filename": "FLUID-3695.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-08-30T11:33:09.402-0400",
      "body": "Replaces trim with jQuery.trim\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:24:55.651-0400",
      "body": "Fixed in pre-1.5 evaluation\n"
    }
  ]
}
---
In IE the app (for example cspace) will break when trying to call trim on a string.

        