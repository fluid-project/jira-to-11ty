---json
{
  "title": "FLUID-5003",
  "summary": "No selection styling for contrast themes in full page UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2013-04-30T10:29:13.655-0400",
  "updated": "2015-06-26T10:05:28.674-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE 8 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5003/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-04T11:20:29.502-0400",
      "body": "screenshot.png shows the lack of selection styling for contrast themes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:21:05.396-0400",
      "body": "Could not reproduce in IE 11 (which is currently the latest supported version of IE)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:06.233-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the full with preview manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/uiOptionsFullWithPreview.html>

2\) Using the keyboard change the contrast theme\
Note that you can adjust the contrast theme, but the focus styling is not applied to the selection.

        