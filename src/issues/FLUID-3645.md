---json
{
  "title": "FLUID-3645",
  "summary": "Check licenses and copyrights",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2010-04-13T15:45:08.000-0400",
  "updated": "2011-01-13T16:54:19.771-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3645/FLUID-3645.patch",
      "filename": "FLUID-3645.patch"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-04-13T15:46:12.000-0400",
      "body": "This patch updates all copyright dates for Infusion 1.2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-13T15:57:13.000-0400",
      "body": "Committed Yura's patch <https://fluidproject.atlassian.net/browse/FLUID-3645#icft=FLUID-3645>.patch at r9823\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:09.783-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Ensure all javascript files have a license and copyright. Also make sure thirdparty code is compatibly licensed and a license file is included in the same directory as the code.

        