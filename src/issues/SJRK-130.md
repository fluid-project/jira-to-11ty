---json
{
  "title": "SJRK-130",
  "summary": "When saving binaries, enforce sensible defaults regarding file size",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:28:47.584-0400",
  "updated": "2018-06-01T15:28:47.584-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When saving binaries, we should have sensible defaults for the allowed file size (the Multer middleware grade will allow us to configure this).&#x20;

User-friendly handling of this will entail resizing of images that are too large, and, later, compression of video and audio (these should become separate JIRAs as appropriate).

        