---json
{
  "title": "FLUID-651",
  "summary": "File Uploader: Complete tick mark sometimes does not appear in a timely manner",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-27T13:09:17.000-0400",
  "updated": "2008-12-02T15:32:48.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-17T12:22:15.000-0400",
      "body": "Can't seem to reproduce this, although I don't feel that I did anything to fix it.&#x20;\n"
    }
  ]
}
---
The File Uploader doesn't pre-cache the Complete tick mark, so that when the uploader is updating the file queue, the tick mark doesn't always appear right away.

The remove icon, tick mark icon, and the error icons should be pre-loaded with the template.

        