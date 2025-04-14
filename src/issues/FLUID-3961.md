---json
{
  "title": "FLUID-3961",
  "summary": "Demo: Top border of focus styling remains after tabbing away from the submit button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2010-12-20T10:55:51.359-0500",
  "updated": "2015-06-26T10:01:27.153-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Progress"
  ],
  "environment": "IE 9 (Win7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3961/Screen shot.png",
      "filename": "Screen shot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-20T10:56:54.435-0500",
      "body": "\"Screen shot\" shows the top border remaining after focus has been placed elsewhere\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T09:19:19.200-0400",
      "body": "Cannot reproduce in IE 11 (which is the only currently supported version of IE)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:55.493-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The top border from the focus styling remains on the submit button after tabbing away.

Steps to reproduce:

1\) Open the progress demo\
<http://build.fluidproject.org/infusion/demos/progress/demo.html>

2\) Tab through and place focus on the submit button

3\) Press the 'tab' key again to move focus away from the submit button\
Notice that the top border remains

Note that shift-tab doesn't have this problem, so it may have something to do with leaving the frame.

        