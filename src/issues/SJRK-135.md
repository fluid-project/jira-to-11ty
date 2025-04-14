---json
{
  "title": "SJRK-135",
  "summary": "Consider combining client-side and server-side projects into a monorepo",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:58:33.065-0400",
  "updated": "2018-07-17T09:59:02.778-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
A more appropriate structure for the storytelling tools project might be a monorepo in this style (examples only):

* client
* serverWithCouchDBStorage
* serverWithFileSystemStorage

This would keep the various pieces separated, but make development and deployment easier; it should be a topic for discussion in the future as the tool evolves.

        