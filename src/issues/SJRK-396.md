---json
{
  "title": "SJRK-396",
  "summary": "Story Tool: block preview or publish while file(s) are uploading",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Dana",
  "date": "2020-09-14T15:29:26.978-0400",
  "updated": "2020-09-18T18:48:31.316-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-289/",
      "key": "SJRK-289",
      "summary": "Add auto-save or caching feature for story authoring"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-396/Upload failed.png",
      "filename": "Upload failed.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-396/Upload in progress.png",
      "filename": "Upload in progress.png"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2020-09-18T18:48:31.316-0400",
      "body": "Create separate Jira for failed upload message?\n"
    }
  ]
}
---
Previewing and publishing a story will not be allowed when files are being uploaded to the server. Provide a message to the user to let them know what is happening.

We will start with a simple message that tells them their files are still uploading, ~~and gives the option to cancel the preview or publish. If they cancel, they will be returned to the main story editor page (where they can see which files are still uploading).~~

In order to cancel the uploads, user must return to the story editor main page.

Eventually would be good to include a list of all the files that are uploading and their progress.

        