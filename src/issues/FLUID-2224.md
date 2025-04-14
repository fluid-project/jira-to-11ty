---json
{
  "title": "FLUID-2224",
  "summary": "[Uploader] DemoUploadManager-test broken by b5 checkin (6480)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Eli Cochran",
  "date": "2009-02-11T19:47:02.000-0500",
  "updated": "2009-02-17T10:02:11.000-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
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
      "date": "2009-02-12T10:05:45.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-12T10:06:50.000-0500",
      "body": "swfuploader unit tests are also failing\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-12T17:38:44.000-0500",
      "body": "The DemoUploadManager tests are failing due to SWFUpload b5's insistence on having a DOM element to squash, even in Flash 9.\n\nThe SWFUploadManager tests were failing because of \"features\" that we were able to remove from the code now that SWFUpload b5 fixed a few issues.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T23:07:09.000-0500",
      "body": "Fixed as of revision 6494.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-17T08:58:18.000-0500",
      "body": "Tested this fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n\nWill close after code review\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-17T09:40:15.000-0500",
      "body": "I have reviewed Colin's fix and it looks great. Perhaps the most tongue-in-cheek code that we have in our code-base, but completely correct.\n"
    }
  ]
}
---
When upgrading the code base to use SWFUpload b5, we broke the unit test for the DemoUploadManager. All tests fail.

        