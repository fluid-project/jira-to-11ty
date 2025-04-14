---json
{
  "title": "SJRK-142",
  "summary": "imageBlockEditor can upload two images accidentally",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2018-06-05T16:57:36.976-0400",
  "updated": "2019-09-12T19:02:17.280-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T19:02:17.278-0400",
      "body": "With the removal of the Capture Image button and hasMobileCamera functionality, this is no longer possible\n"
    }
  ]
}
---
in the imageBlockEditor, there is the possibility (with the hasMobileCamera grade) to have two upload elements appear. If both are provided images, then both images will be sent to and saved by the server. Only the most recently chosen image should be uploaded.

        