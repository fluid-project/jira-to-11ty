---json
{
  "title": "FLUID-2051",
  "summary": "Uploader demo on local file system throws an exception; using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-01-05T11:55:30.000-0500",
  "updated": "2009-02-12T08:56:43.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-05T12:02:37.000-0500",
      "body": "In IE 7 and IE 6 (Win XP) the browse button doesn't even seem to work. This is even after the adjusting the permissions (it does work using firefox).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-15T14:11:58.000-0500",
      "body": "The error is also thrown when trying to remove a file from the file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:54:31.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T09:52:23.000-0500",
      "body": "updated the line number\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-11T20:32:49.000-0500",
      "body": "I couldn't reproduce this bug with either Flash 9 or Flash 10. I am assuming that it was fixed when we moved to b5\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-12T08:56:43.000-0500",
      "body": "It does appear that this issue was solved by upgrading to swfupload 2.20 beta 5\n\nTested using:\n\nIE7 (Win XP, Win Vista)\\\nIE6 (Win XP)\n"
    }
  ]
}
---
Uploader demo on local file system throws an exception; using IE

Steps to reproduce:

1\) From your local file system run the uploader demo

2\) Add a file to the file queue

3\) Click the "Upload" button

Notice that an exception is thrown

Error: Exception thrown and not caught\
line: 565\
file: Fluid.js

        