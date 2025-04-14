---json
{
  "title": "ENGAGE-497",
  "summary": "Local previewable demo of the NavigationList is missing the reference to engageRenderUtils",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-03-07T19:52:09.000-0500",
  "updated": "2017-12-22T09:44:15.799-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-497/ENGAGE-497.patch.txt",
      "filename": "ENGAGE-497.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-497/ENGAGE-497.patch.txt",
      "filename": "ENGAGE-497.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-497/ENGAGE-497b.patch.txt",
      "filename": "ENGAGE-497b.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-07T19:59:18.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-497#icft=ENGAGE-497>.patch.txt adds in the missing script import of engageRenderUtils.js to both the components html file and the unit test\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-07T20:38:23.000-0500",
      "body": "Same as ENGAGE-497b.patch.text but also fixes the problem in the cabinet's html file. While cabinet doesn't actually need this, it does use the navigationList as part of it's example.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:15.793-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Local previewable demo of the NavigationList is missing the reference to engageRenderUtils

This is causing it to not render and throw an error.

        