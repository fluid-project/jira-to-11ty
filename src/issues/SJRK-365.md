---json
{
  "title": "SJRK-365",
  "summary": "Story builder tab / shift-tab block focus issues",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Dana",
  "date": "2020-06-22T13:50:07.667-0400",
  "updated": "2020-07-14T01:42:32.737-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-366/",
      "key": "SJRK-366",
      "summary": "Story Tool re-order buttons should be enabled immediately when adding new block"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-06-30T15:41:05.541-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/84) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/124ca75934d39db06645c1cd017a7966efa6da49).\n"
    }
  ]
}
---
What's working now:

* Tabbing from delete button to the first block - focus lands on the block group (then moves to enabled up/down reorder buttons, then to delete checkbox, then to first block field).

Bug 1:

* Tabbing out of any block lands focus on the first block field of the next block (i.e. Block heading)

Behaviour we want:

* Tabbing out of any block lands focus on the next block group (then to reorder buttons, etc.)
* Focusing on the block as a group enables:
  * moving blocks with keyboard shortcuts (shift-Control + arrow keys on Mac, Ctrl + arrow keys on windows) as well as
  * moving focus from block to block with keyboard arrow keys

Bug 2:

* Shift-tab does not allow focus on a block group

Behaviour we want:

* Shift-tab order to be the reverse of tab order (such that Shift-tabbing from a block moves focus to last field of block above, then through the block fields, delete checkbox, re-order buttons, and finally to the block group, then out of the block)

Note: this is potentially an issue with the Infusion Reorderer component and not the Story Tool itself

        