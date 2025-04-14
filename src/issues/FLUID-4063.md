---json
{
  "title": "FLUID-4063",
  "summary": "Release 1.3.1: Double-check builder dependency files",
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
  "date": "2011-02-16T09:43:42.298-0500",
  "updated": "2011-02-22T16:14:59.295-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-22T10:04:00.998-0500",
      "body": "I missed the Uploader dependency on the scrollTo plugin\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-22T10:48:20.172-0500",
      "body": "Sent pull request for 4063. Added jQueryScrollToPlugin to uploader dependencies.\n"
    }
  ]
}
---
We don't expect any changes for this release, but we should double-check that the builder dependency JSON files are up-to-date nonetheless.

        