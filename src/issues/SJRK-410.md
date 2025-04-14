---json
{
  "title": "SJRK-410",
  "summary": "Load a specified story into client autosave",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-22T16:40:26.704-0400",
  "updated": "2020-11-26T13:14:43.148-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-407/",
      "key": "SJRK-407",
      "summary": "Create server endpoint to select/load story to edit"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-11-17T15:15:57.677-0500",
      "body": "There is currently a restriction on file uploads that only allows files to be uploaded to published stories. This restriction is something we may want to remove in order to allow adding files to already-published stories, depending on how we handle the editing experience for published stories (i.e. the autosave feature's behaviour)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-18T14:19:51.767-0500",
      "body": "Currently if you edit a published story and change an uploaded file, it will no longer be accessible to the published story. The published story will appear \"broken\" until the edits are published and the new URL is in place. To solve this issue, the immediate solution will be to not delete any uploads when a new file is uploaded. In the future we may want a file browser or similar to allow a user to remove unwanted files from the server.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-11-26T13:14:43.124-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/103) that fixes this issue has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/42fa0b869fe14f3e97111f95d6d80f0073dc26c7).\n"
    }
  ]
}
---
Add client-side code to the Story Edit page to load the specified story into the browser's localStorage and into the storyEditor's model, to allow authors to edit previously-created stories.

This is the client-side aspect of SJRK-407.

        