---json
{
  "title": "FLUID-605",
  "summary": "Size of files to upload incorrectly includes size of files already uploaded.",
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
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T15:13:30.000-0400",
  "updated": "2008-12-02T15:17:04.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:55:53.000-0400",
      "body": "With the various changes to the way that the progress is tracked and displayed this bug is fixed.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T15:17:04.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
If files have been previously uploaded and new files are added to the upload queue (but not actually uploaded), the total file size to upload is reported incorrectly. The incorrect file size includes the total sum of files already uploaded.

        