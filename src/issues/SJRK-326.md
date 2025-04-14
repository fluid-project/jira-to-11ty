---json
{
  "title": "SJRK-326",
  "summary": "Edit Page state can persist after leaving page",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-03-15T21:07:20.331-0400",
  "updated": "2020-04-03T12:43:47.134-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-104/",
      "key": "SJRK-104"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-03-17T17:11:09.724-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/59) that fixes this issue has been merged into the project repo at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/b886c18b792ea90b4a85cfc8b0e8a7028ea11361).\n"
    }
  ]
}
---
The currently-visible step of the Edit page will persist, so even after story publishing and returning to the editor, the user will be shown the last-viewed state, i.e. the previewer. This is because the historian component is not being reset or cleared.

**To reproduce**:

1. Go to the Edit page
2. Click "Continue" to go to the Metadata step
3. Click "Preview my story" to go to the Previewer step
4. Click "Publish my story" to publish the story
5. Once the new story View page loads, go back to the Edit page

**Expected**:

the currently shown step is the Edit Story Step (block editor)

**Actual**:

the currently shown step is the Previewer step

 

A potential solution would be to reset the historian component once it is created, or on story publish.

        