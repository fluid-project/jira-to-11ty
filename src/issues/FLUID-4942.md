---json
{
  "title": "FLUID-4942",
  "summary": "Provide a quick fix to Infusion 1.4 users for Prototype.js conflicts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2013-03-21T16:12:19.476-0400",
  "updated": "2024-07-22T14:36:06.913-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T09:52:36.105-0400",
      "body": "@@Colin Clark seeing as this is 2 years old, is it still something that is worth doing?\n"
    }
  ]
}
---
As described in FLUID-4941, Prototype.js is conflicting with Infusion due to the fact that it is extending built-in types. While we can't do anything about that, we can ensure that Infusion is more resilient to this issue.

While the bug has been fixed for Infusion 1.5, it would be nice to provide a quick fix for Infusion 1.4 users (especially uPortal) who are experiencing this issue.

My suggestion is to create a 1.4.x branch from the 1.4 tag and commit a fix there. While it is unlikely that we will be able to provide a fully QA-tested 1.4.1 release, this will at least provide users with a fixed version if they need it.

        