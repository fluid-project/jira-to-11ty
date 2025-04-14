---json
{
  "title": "SJRK-279",
  "summary": "Add detail to block selection checkbox labels",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2019-09-09T13:06:52.194-0400",
  "updated": "2019-09-17T15:11:42.769-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-09-10T14:23:07.749-0400",
      "body": "The ideal would be to notify the user when they are about to delete a block that has content. Reading out some or all of the content of the block would be helpful in this case.\n\nPerhaps issue a warning *only* when a block with content is about to be deleted, or a summary of block(s) that are about to be deleted when the delete button is pressed.\n"
    }
  ]
}
---
In the editor, it’s unclear which checkbox refers to which block. It would be better to perhaps specify the type of block, or maybe tie into the heading field using aria-describedby.

Currently says “Select this section”, would be better if it were something like “Select this text block”, “Select block with heading: \_\_\_\_...” or a combination of the two

        