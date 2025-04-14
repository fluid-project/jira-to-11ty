---json
{
  "title": "FLUID-3910",
  "summary": "Update Builder PHP unit tests now that FSS dependencies have change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-15T16:34:55.705-0500",
  "updated": "2010-12-16T15:37:27.496-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3910/FLUID-3910-1.patch.txt",
      "filename": "FLUID-3910-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2010-12-16T11:16:04.462-0500",
      "body": "\"FLUID-3910-1.patch.txt\" updates the php unit tests that fail due to the change on the FSS dependencies. Now the unit tests use \"Renderer\" as the example instead of \"fss\", which does not have dependencies any more. This patch also adjusts the module sequence numbers that have been shifted due to the removal/addition of modules.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-16T15:36:34.622-0500",
      "body": "I've reviewed Cindy's patch, and Cindy has walked me through verifying that the patch does properly update the unit tests. I've committed the changes, and the deployed unit tests now pass.\n"
    }
  ]
}
---
Now that we've consolidated the FSS dependencies into just the one, the PHP unit tests need to be updated.

        