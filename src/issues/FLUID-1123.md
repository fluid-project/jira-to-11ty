---json
{
  "title": "FLUID-1123",
  "summary": "Reorderer broken, throws errors in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-08-11T09:23:05.000-0400",
  "updated": "2008-08-13T08:55:48.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 6, IE7 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1123/FLUID-1123.patch",
      "filename": "FLUID-1123.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-11T15:16:15.000-0400",
      "body": "Updated debugging info\\\n\\====================\n\nFile: Reorderer.js\\\nLine: 483\\\nError: Expected identifier, string or number\n\nAll of the above sites have the same issue.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-08-12T12:09:45.000-0400",
      "body": "Extra comma removed - IE dies when a list contains a trailing comma, whereas FF wont.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-12T12:18:26.000-0400",
      "body": "I've tested this patch, and it does fix the error - good catch, Jacob!\n\nI've committed the fix.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-13T08:55:48.000-0400",
      "body": "Verified fix using:&#x20;\n\nIE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
When loading a page containing reorderable elements in IE, the following errors are thrown.

Generic Lightbox example:\
\---------------------------------------
\
Line: 2\
Char: 1608\
Error: Object doesn't support this property or method\
Code: 0

Reorderable jQuery Tabs Demo:\
\---------------------------------------------
\
Line: 2\
Char: 8913\
Error: Expected Identifier, string or number\
Code: 0

Line: 48\
Char: 5\
Error: Object expected\
Code: 0

Sortable Vertical List:\
\--------------------------------
\
Line: 17\
Char: 5\
Error: Object doesn't support this property or method\
Code: 0

Uportal demo:

Line: 2\
Char: 1608\
Error: Object doesn't support this property or method\
Code: 0

Line: 2\
Char: 584\
Error: Object doesn't support this property or method\
Code: 0

        