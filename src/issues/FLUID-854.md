---json
{
  "title": "FLUID-854",
  "summary": "Implement a minimum width to an Inline Edit field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-03T21:13:43.000-0400",
  "updated": "2009-06-03T13:43:46.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-775/",
      "key": "FLUID-775"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-854/FLUID-854.patch.txt",
      "filename": "FLUID-854.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-10T20:23:34.000-0400",
      "body": "This has been implemented in the <https://fluidproject.atlassian.net/browse/FLUID-755#icft=FLUID-755> branch.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-10T20:23:57.000-0400",
      "body": "Not in trunk yet...\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-10T20:25:04.000-0400",
      "body": "This patch makes the use of invitation text optional, and adds padding if there is no invitation text.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-15T20:33:21.000-0400",
      "body": "Fixed, and merged from the branch back into trunk.\n"
    }
  ]
}
---
If there is no invitation text and the field is left empty, it should have some minimum with so that the invitation highlight is more noticeable.

dev-iteration38

        