---json
{
  "title": "FLUID-3726",
  "summary": "Refactor the Uploader's SWFUpload setup decorator",
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
  "date": "2010-09-09T13:33:50.819-0400",
  "updated": "2014-03-03T13:41:20.686-0500",
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
      "date": "2010-10-04T14:53:24.940-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T12:15:22.274-0500",
      "body": "This series of refactoring was generally completed at r10315 in the <https://fluidproject.atlassian.net/browse/FLUID-3722#icft=FLUID-3722> branch of Uploader.\n"
    }
  ]
}
---
The Uploader has a decorator subcomponent called the SWFUploadSetupDecorator, which is responsible for configuring the DOM and getting SWFUpload setup to work with Flash 10. This factoring mixes together a lot of different responsibilities, and can be difficult to test. Also, as we add in HTML 5 support, there's a larger pattern about setup that is emerging. Let's refactor the Uploader so that users aren't aware of these sorts of minor setup objects, and instead work with a general "upload strategy" object that serves as a facade for the entire upload subsystem, be it HTML 5 or Flash.

        