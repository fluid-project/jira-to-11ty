---json
{
  "title": "FLUID-4483",
  "summary": "Image uploader does not stop immediately when requested",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-09-30T15:30:17.444-0400",
  "updated": "2015-06-10T10:26:37.574-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8 Win 7\\\nIE 9 Win 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When uploading a file, pressing Stop does not stop the upload immediately. The file completes the upload then the queue is stopped.

The proper behaviour should be an immediate stop.

        