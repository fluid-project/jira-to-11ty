---json
{
  "title": "FLUID-4275",
  "summary": "Uploader test cases are failing on FF 3.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-05-30T17:26:00.013-0400",
  "updated": "2011-05-30T17:57:32.066-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-05-30T17:26:31.860-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-30T17:57:32.065-0400",
      "body": "Reviewed and merged\n"
    }
  ]
}
---
The test case Uploader-test.html is failing on my configuration (FF 3.6 on Windows 7) on test 5, Uploader with direct creator function. The immediate report is "Permission denied for \<file://> to create wrapper for object of class UnnamedClass" which is not terribly informative - applying "?notrycatch" to the URL reveals that the error is thrown from HTML5UploaderSupport.js line 272 which does an xhr.open("POST") presumably against the filesystem.

        