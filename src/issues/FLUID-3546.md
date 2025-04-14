---json
{
  "title": "FLUID-3546",
  "summary": "No rounded corners on .fl-icon inside lists",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jacob Farber",
  "date": "2010-03-25T14:46:53.000-0400",
  "updated": "2015-06-26T10:13:13.518-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Mobile FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.327-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:20.267-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
fl-icons are supposed to have rounded corners when used within simple lists, but the rounded corner effect doesnt happen on mobile safari, only desktop flavours of webkit

        