---json
{
  "title": "FLUID-2854",
  "summary": "Difficult to reorderer items in FLUID-0.3 version in the Versioning manual test: using IE 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-05-29T16:52:29.000-0400",
  "updated": "2015-06-26T10:16:50.299-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework"
  ],
  "environment": "IE 8 (Win Vista, WIn XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:42:41.289-0400",
      "body": "No longer using Fluid-0.3 in the versioning manual test.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:30.791-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Difficult reorderer items in FLUID-0.3 version in the Versioning manual test

Steps to reproduce

1\) Open the versioning manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/versioning.html>

2\) Attempt to reorder the elements under the "Sortable List using FLUID-0.3" heading

Notice that you can move items up 1 spot at a time only.

        