---json
{
  "title": "FLUID-1725",
  "summary": "Uploader 2: Progress bars do not show file upload progress",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-10-29T10:56:54.000-0400",
  "updated": "2008-10-29T14:28:49.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1672/",
      "key": "FLUID-1672",
      "summary": "Uploader 2: Add the ability to keep track of the progress of individual files in the uploadManager queue"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1671/",
      "key": "FLUID-1671",
      "summary": "Add the ability to keep track of the total file progress in the uploadManager"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-10-29T14:25:00.000-0400",
      "body": "appears to be fixed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-29T14:28:49.000-0400",
      "body": "I believe it was fixed with r5890\n"
    }
  ]
}
---
None of the progress bars are displaying the upload progress.

The following error occurs during upload.

file.progress has no properties\
\[Break on this error] file.progress.update(filePercent,filePercent+"%","",true);

From line 56 of uploader.js

        