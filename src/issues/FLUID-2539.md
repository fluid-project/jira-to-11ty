---json
{
  "title": "FLUID-2539",
  "summary": "Down movement via down arrow not working, with dynamic reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-06T12:59:20.000-0400",
  "updated": "2009-11-05T15:09:17.000-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-04-09T10:50:45.000-0400",
      "body": "I'm not sure if this is really a bug, or a bad test case: The code is using the grid reorderer configuration, but the visual styling is for a vertical list. This will cause confusion in the expectation of up/down functionality.\n\nI suggest that either the styling be converted to a grid (i.e. horizonal, and flowing) or the list reorderer be used instead. This might actually change the behaviour, and render the issue moot.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-05T15:09:17.000-0500",
      "body": "This appears to now be working.\n\nTested using IE 8 Win Vista, FF 2 and FF3.5 Mac OS 10.6\n"
    }
  ]
}
---
Down movement via down arrow not working, with dynamic reorderer

Steps to reproduce:

1\) Open the dynamic reorderer manual test \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/dynamic-reorderer.html>

2\) Using the keyboard tap the "tab" key until one of the reorderable elements has focus.&#x20;

3\) Attempt to move one of the reorderable elements down in the set

Notice that crtl-down arrow doesn't work. You can move items down in the list by going up and having it scroll around, or by using the ctrl-right arrow.

        