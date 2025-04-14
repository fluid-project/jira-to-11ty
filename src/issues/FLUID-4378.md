---json
{
  "title": "FLUID-4378",
  "summary": "For Fat Panel UIO the \"reset\" button should be \"reset and apply\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-07-28T14:53:23.812-0400",
  "updated": "2013-04-11T16:10:57.002-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:53:30.308-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T10:31:11.016-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/137> merged into project repo at 4018514d2d1fa9d235178ff8ea89d4a3c10f2466\n"
    }
  ]
}
---
When triggering the reset button the changes should take effect immediately in the uio panel. For other changes, they shouldn't update till after it is closed and reopened.

        