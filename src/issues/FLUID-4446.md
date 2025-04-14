---json
{
  "title": "FLUID-4446",
  "summary": "Grammar needs fixing for 1 file error: \"1 files were too large and were not added to the queue.\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2011-09-13T13:09:03.476-0400",
  "updated": "2016-11-02T11:56:48.217-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-09-29T16:59:11.010-0400",
      "body": "Also for max # files error: \"Too many files were selected. 1 were not added to the queue.\"\n"
    }
  ]
}
---
Add a large file the queue and try to upload. Error message is "1 files were too large and were not added to the queue." - msg meant for plural files

        