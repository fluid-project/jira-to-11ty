---json
{
  "title": "SJRK-308",
  "summary": "Empty media blocks cause timeout on iPod",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2019-10-10T13:47:48.611-0400",
  "updated": "2020-03-15T21:44:32.923-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": "iPod touch 6th generation\\\niOS 11.4.1\\\nSafari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-10-10T14:00:29.181-0400",
      "body": "Issue no longer occurs after updating device to iOS 12.4.2\n"
    }
  ]
}
---
Stories with empty media blocks (image, audio, video) will fail to upload and seemingly time out after 60 seconds with an empty HTTP response from the server.

Error has only been observed on the iPod touch 6th gen (iOS 11.4.1).&#x20;

        