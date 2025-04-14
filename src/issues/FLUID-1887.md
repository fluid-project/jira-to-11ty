---json
{
  "title": "FLUID-1887",
  "summary": "Pager demo broken after being moved to a new directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-12-02T12:33:32.000-0500",
  "updated": "2008-12-03T11:31:38.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1887/fluid-1887-patch.txt",
      "filename": "fluid-1887-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-02T12:35:54.000-0500",
      "body": "fluid-1887-patch.txt\n\ncorrects the relative paths inside pager.html\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-03T11:10:05.000-0500",
      "body": "I've updated the build site to the new path.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:31:38.000-0500",
      "body": "All updates appear to be working\n"
    }
  ]
}
---
The move of pager to a new folder caused two issues.

1\) the link on the build site needs to be updated

2\) the relative paths in pager.html need to be updated

        