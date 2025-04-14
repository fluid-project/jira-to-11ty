---json
{
  "title": "FLUID-671",
  "summary": "File Upload: Punch through more elaborate server-side upload errors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-29T11:31:58.000-0400",
  "updated": "2011-01-05T15:41:35.964-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2556/",
      "key": "FLUID-2556"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Armin Krauss",
      "date": "2009-10-08T15:04:52.000-0400",
      "body": "Is there any plan to improve the error messaging on the test server? I did Uploader tests with IE 6 (Flash 9) on Win XP and if I remove a file from the file system while uploading the message is generic \"File upload error: a network error occured\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:41:35.962-0500",
      "body": "Duplicate JIRA.   See <https://fluidproject.atlassian.net/browse/FLUID-2355#icft=FLUID-2355>\n"
    }
  ]
}
---
Currently the only error that is passed to the client-side of the Uploader is a very generic 500 error, we need to provide a way to give the user better feedback on problems that occurred on the server.

        