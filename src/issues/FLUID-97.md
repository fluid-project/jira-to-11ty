---json
{
  "title": "FLUID-97",
  "summary": "\"dojo is not defined\" error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2007-11-05T16:02:48.000-0500",
  "updated": "2007-11-19T13:51:47.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-07T11:45:11.000-0500",
      "body": "This is likely an issue in resources not in the lightbox or gallery.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2007-11-14T16:51:54.000-0500",
      "body": "I could not reproduce this problem on FF on the Mac. Please attempt to reproduce and provide more info.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2007-11-19T13:51:47.000-0500",
      "body": "This issues appears to be corrected in current build. Tried to reproduce on Mac using Firefox and on WinXP using Firefox and IE7.\n"
    }
  ]
}
---
Clicking on the resources link and any folder within, throws a "dojo is not defined" error.

        