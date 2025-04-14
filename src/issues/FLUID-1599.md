---json
{
  "title": "FLUID-1599",
  "summary": "Reorderer broken due to error with fluid.dom",
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
  "reporter": "Justin Obara",
  "date": "2008-09-22T08:53:58.000-0400",
  "updated": "2008-09-22T12:57:54.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-09-22T11:01:07.000-0400",
      "body": "I fixed this issue by actually committing the HTML files I had forgotten.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T11:03:33.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:57:54.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    }
  ]
}
---
Reorderer broken due to error with fluid.dom

On loading any page that uses the reorderer an error is thrown:

fluid.dom has no properties\
\[Break on this error] var pos = fluid.dom.computeAbsolutePosition(element) || \[0, 0];

From line 205 of GeometricManager.js

        