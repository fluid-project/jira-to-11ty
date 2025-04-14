---json
{
  "title": "FLUID-3852",
  "summary": "Incorrect screen reader feedback on empty file queue .",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Mike Lam",
  "date": "2010-11-18T13:42:41.032-0500",
  "updated": "2011-01-14T11:51:36.707-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-18T16:23:54.274-0500",
      "body": "Suggested feedback:\\\n\"File list: 2 files uploaded, 1 file waiting to be uploaded.\"\\\n\"File list: No files waiting to be uploaded.\" (in the initial case where 0 files uploaded and 0 files queued)\\\netc.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-18T17:02:34.552-0500",
      "body": "Create more informative summary of the file queue.  Details include the number of files successfully uploaded and the number of files ready to be uploaded.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T10:42:06.753-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    }
  ]
}
---
The uploader currently has incorrect screen reader feedback on an empty file queue.  There may not be any files to be uploaded, but there may be successfully uploaded files present in the file list.  We'll want to the screen reader feedback to reflect this.

        