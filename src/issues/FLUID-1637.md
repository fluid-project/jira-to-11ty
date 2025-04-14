---json
{
  "title": "FLUID-1637",
  "summary": "[Uploader] the upload.php file checked in with the sample-code references paths on Eli's personal server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-09-29T15:19:40.000-0400",
  "updated": "2008-09-30T08:53:26.000-0400",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-29T16:39:59.000-0400",
      "body": "I reviewed the commit. Besides the reference to Eli's server, one other line changed in the file. Since it wasn't working for us prior to the commit (as explained in the Readme) I think this change is fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T08:53:26.000-0400",
      "body": "code was reviewed (see above comments)\n"
    }
  ]
}
---
At some point in the project I checked sample-code/uploader/php/upload.php that I was using for testing. This file contains the following reference to a path on my personal server: \
$save\_path = "/home/elicochr/public\_html/sos/uploads/";

Suggested fix is to replace this file with the latest version of the file from the swfupload code repository.

        