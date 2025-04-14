---json
{
  "title": "FLUID-2168",
  "summary": "FileQueue View unit tests 3.3 fails",
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
  "reporter": "Justin Obara",
  "date": "2009-01-28T09:19:42.000-0500",
  "updated": "2009-01-28T12:13:02.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2136/",
      "key": "FLUID-2136",
      "summary": "[Uploader 2] After removing a row from the FileQueueView the progressor for the row is left behind"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-01-28T11:43:48.000-0500",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-2136#icft=FLUID-2136> which caused it.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-28T11:51:55.000-0500",
      "body": "Fixed. Checking to see if the progressor exists before we try to remove it.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-28T12:13:02.000-0500",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\\\nIE7 (Win XP)\n"
    }
  ]
}
---
FileQueue View unit tests 3.3 fails

<http://build.fluidproject.org/fluid/tests/fluid-tests/uploader/FileQueueView-test.html>

Appears to have started at r6329

        