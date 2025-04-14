---json
{
  "title": "FLUID-903",
  "summary": "Revise the 'Release Process' info on how to create documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-15T14:44:32.000-0400",
  "updated": "2011-01-20T15:24:42.459-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Wiki"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-05T13:21:26.000-0400",
      "body": "There are now instructions for creating versioned snapshots of the wiki pages.\n"
    }
  ]
}
---
The 'Release Process' page currently describes the old process of generating a PDF of the documentation. It needs to be updated to reflect capturing a snapshot of the API docs:

* create a copy of each page and rename it
* ensure the note at the top of the snapshot references the trunk docs
* ensure the trunk docs reference the latest snapshot

dev-iteration40

        