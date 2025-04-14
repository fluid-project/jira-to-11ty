---json
{
  "title": "FLUID-2857",
  "summary": "In gracefully degraded version of uploader, can use the keyboard to navigate to the hidden \"browse files' button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-06-01T09:59:17.000-0400",
  "updated": "2014-05-22T14:29:26.216-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, flash 9), IE 8 (WIN 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2857/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-01T10:04:48.000-0400",
      "body": "'screenshot-1' shows focus on the hidden browse files button and the OS File Open dialog displayed by clicking on it.\n"
    },
    {
      "author": "y z",
      "date": "2010-04-05T18:06:49.000-0400",
      "body": "Also acts the same way in WIN7 IE8\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:34:00.891-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:39:14.311-0500",
      "body": "Please determine if this is done and should be closed or if it should be put into another release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:29:26.214-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
In gracefully degraded version of uploader, can use the keyboard to navigate to the hidden "browse files' button

Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html#>

2\) Switch to the single file uploader

3\) tap CMD-("down arrow") to move around the page. Notice that you can reach the hidden browse files button and even activate it by pressing the "enter" key

        