---json
{
  "title": "FLUID-4018",
  "summary": "The \"Stop\" button is unavailable in the HTML 5 version of Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-12-22T17:47:27.162-0500",
  "updated": "2014-03-03T13:39:11.834-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Firefox 3.6, Firefox 4, Safari 4, Safari 5, Chrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-27T11:08:12.688-0500",
      "body": "Patch for <https://fluidproject.atlassian.net/browse/FLUID-4017#icft=FLUID-4017> should automatically take care of this.  See <https://fluidproject.atlassian.net/browse/FLUID-4018#icft=FLUID-4018>.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-07T11:23:22.845-0500",
      "body": "Changed affect version to 1.3.1.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-07T12:02:54.157-0500",
      "body": "Removed affects version 1.3.1 until further testing.&#x20;\n"
    }
  ]
}
---
In the HTML 5 version of the Uploader, the Stop button is not available. This means that users can't correct any mistakes they have made once they've clicked the "Upload" button.

        