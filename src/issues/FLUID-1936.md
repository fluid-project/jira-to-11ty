---json
{
  "title": "FLUID-1936",
  "summary": "\"Stop Upload\" button throws an error",
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
  "reporter": "Justin Obara",
  "date": "2008-12-08T09:37:02.000-0500",
  "updated": "2009-01-20T13:33:19.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T09:37:26.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T12:43:23.000-0500",
      "body": "with the resolving of <https://fluidproject.atlassian.net/browse/FLUID-1947#icft=FLUID-1947>, I declare this bug resolved! I guess I should wait for it to close but we're just getting so close!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-20T13:33:19.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
"Stop Upload" button throws an error

that.uploadManager.pause is not a function

that.uploadManager.pause();  From line 428 of Uploader.js

Steps to reproduce

1\) Open the uploader example:

2\) Add several files to the file queue

3\) Press the upload button to start uploading the files.

4\) Press the "Stop Upload" button

Notice that the uploads continue and that an error is thrown.

        