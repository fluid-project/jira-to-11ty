---json
{
  "title": "FLUID-647",
  "summary": "File Uploader: No error feedback for users",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-27T12:33:15.000-0400",
  "updated": "2011-03-15T14:19:18.023-0400",
  "versions": [
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2355/",
      "key": "FLUID-2355"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:43:24.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-15T14:19:18.020-0400",
      "body": "all sub-issues have been closed, and new jiras related to the uploader's error handling have been filed.\n"
    }
  ]
}
---
Although the server is returning 500 errors (for a variety of error situations) the File Upload code is not giving any feedback to the user.&#x20;

        