---json
{
  "title": "SJRK-133",
  "summary": "Fix and improve testServerWithStorage.js",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:48:07.858-0400",
  "updated": "2018-06-04T14:58:46.423-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-04T14:58:46.421-0400",
      "body": "This issue has been fixed in my master branch, will PR into Alan Harnum's\n"
    }
  ]
}
---
The test files for the server with storage are currently not working - should be easily fixable (renamed files), but noting in Jira to make sure it gets done.

Should also address fragility of sjrk.storyTelling.server.testServerWithStorageDefs.retrieveUploadedImage when this is done, see TODO at line 241.

        