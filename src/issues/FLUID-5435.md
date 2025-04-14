---json
{
  "title": "FLUID-5435",
  "summary": "Fluid-0.3 version of reorderer not working",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-06-09T11:12:57.315-0400",
  "updated": "2015-06-26T10:10:16.534-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework",
    "Reorderer"
  ],
  "environment": "IE 10 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-09T11:45:01.131-0400",
      "body": "We decided that we need to investigate this a bit further to determine exactly what the cause of the failure is, and possibly redesign the test.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-16T11:28:05.007-0400",
      "body": "The Fluid-0.3 version has been replaced by the 1.5 version in this manual test.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:16.554-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the versioning manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/versioning.html>

2\) Attempt to reorder the list under the Fluid-0.3 version.\
Notice that it doesn't not work with either the mouse or the keyboard. The 1.5 version does work. There are no failures reported in the console.

        