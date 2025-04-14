---json
{
  "title": "SJRK-366",
  "summary": "Story Tool re-order buttons should be enabled immediately when adding new block",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Dana",
  "date": "2020-06-22T13:54:12.299-0400",
  "updated": "2020-06-22T14:02:07.663-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-364/",
      "key": "SJRK-364",
      "summary": "Improve implementation of templateManager grade"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-365/",
      "key": "SJRK-365"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently, the up/down re-order buttons on a newly added block are disabled until focus lands on any block on the Story Builder.

Behaviour we want: re-order buttons to be enabled immediately when a new block is added.

Note: depending on the number of blocks added and their position, the re-order buttons may be appropriately disabled according to the design (i.e. if there is only one block added, both re-order buttons will be disabled, and the up button of the top block and down button of the bottom block will always be disabled).

        