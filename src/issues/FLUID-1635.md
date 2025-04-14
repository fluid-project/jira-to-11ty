---json
{
  "title": "FLUID-1635",
  "summary": "Keyboard reordering lags using IE6",
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
  "date": "2008-09-29T10:21:53.000-0400",
  "updated": "2011-01-13T10:36:02.555-0500",
  "versions": [
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T15:52:40.000-0400",
      "body": "Only seems to happen after holding down the direction key, now\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:42:02.756-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-13T10:36:02.546-0500",
      "body": "Was likely fixed with some of the recent framework, and reorderer updates\n"
    }
  ]
}
---
Keyboard reordering lags using IE6

Steps to reproduce:

1\) Open the Image Reorderer demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>

2\) Tap the tab key until one of the images has focus

3\) Using the keyboard attempt to quickly reorderer the images

Notice that the movement lags behind the keystrokes

        