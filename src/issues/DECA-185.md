---json
{
  "title": "DECA-185",
  "summary": "Implement file queue gradients as CSS3 not as background images",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-10-28T09:48:47.443-0400",
  "updated": "2012-06-11T16:27:53.277-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:57:21.987-0400",
      "body": "The file queue was removed from the UI. Now only the number of imported files is reported.\n"
    }
  ]
}
---
Implement Uploader's file queue gradients as CSS3. Will need to replicate the animation effect. Otherwise HTML5 progress may be a good alternative if styled properly.

        