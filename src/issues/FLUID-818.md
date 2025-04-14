---json
{
  "title": "FLUID-818",
  "summary": "Upload: In a multi-instance scenario progress displays on both uploaders even when only one is running",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-06-24T19:01:18.000-0400",
  "updated": "2008-12-03T11:44:27.000-0500",
  "versions": [
    "0.3",
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-500/",
      "key": "FLUID-500",
      "summary": "File Upload: Re-factor for multi-instance"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-24T19:01:57.000-0400",
      "body": "Observed during testing for multi-instance verification\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-24T19:28:12.000-0400",
      "body": "The file for multi-uploader testing can be found at: tests/fluid-tests/manual/multi-uploader/index.html\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-24T19:31:02.000-0400",
      "body": "instantiated each progress using the Uploader container, not the file queue. The uploader container selector should always be unique, of course it might not be.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:44:27.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
Set up a page with two-uploaders on the page\
Add files to both uploaders\
Click Upload for one of the uploaders\
Observe that both uploaders display progress

        