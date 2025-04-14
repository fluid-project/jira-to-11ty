---json
{
  "title": "FLUID-1780",
  "summary": "Pressing \"tab\" after \"shift-tab\" does not return you to the original location.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2008-11-07T10:56:24.000-0500",
  "updated": "2017-01-16T09:34:37.424-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF4 (Mac OS 10.6)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:10:16.333-0400",
      "body": "a11y issue\n"
    }
  ]
}
---
Pressing "tab" after "shift-tab" does not return you to the original location.

Steps to reproduce:

1\) Open the Image Reorderer example from the daily build site:\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>

2\) Using the keyboard, tap the 'tab' key until one of the images has focus

3\) Using the keyboard, press shift-tab

4\) Using the keyboard, tap the 'tab' key

Notice that you are not put back on the image

        