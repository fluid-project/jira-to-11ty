---json
{
  "title": "FLUID-680",
  "summary": "\"Resume\" button enabled when not in a resume state.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-05-30T16:00:19.000-0400",
  "updated": "2008-12-19T08:25:38.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:53:14.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-19T08:25:38.000-0500",
      "body": "Resume button not pressent in the current version of uploader\n"
    }
  ]
}
---
After uploading files, adding more files to the queue will enable the "Resume" button. The button should say "Upload" since it is not in a resumable state.

        