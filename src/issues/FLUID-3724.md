---json
{
  "title": "FLUID-3724",
  "summary": "Refactor the Uploader's upload manager subcomponent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-09-09T13:32:53.474-0400",
  "updated": "2014-03-03T13:41:23.675-0500",
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
      "author": "Justin Obara",
      "date": "2010-10-04T14:56:09.609-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T12:26:33.264-0500",
      "body": "A series of refactoring ending at r10315 in the <https://fluidproject.atlassian.net/browse/FLUID-3722#icft=FLUID-3722> branch has resolved this issue.\n"
    }
  ]
}
---
The Uploader's primary abstraction for different uploading strategies--for example the use of SWFUpload or the use of HTML 5--is called an "upload manager." However, the Upload Manager's responsibility is vague and wide-ranging. In order to successfully implement a working HTML 5 strategy, it should be broken up into a number of smaller units responsible for 1) strategy specific setup, 2) the remote interface with the server, and 3) local, file related logic.

        