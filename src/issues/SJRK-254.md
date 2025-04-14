---json
{
  "title": "SJRK-254",
  "summary": "removedBlockKeys param unused in verifyBlocksRemoved() test function",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-07-10T11:50:30.487-0400",
  "updated": "2019-07-10T11:50:30.487-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the test utility function sjrk.storyTelling.testUtils.verifyBlocksRemoved, the parameter \`removedBlockKeys\` is unused by the code.

Either:

* remove it altogether, or
* add testing to check that the blocks removed are indeed those we expect to be removed

        