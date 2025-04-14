---json
{
  "title": "FLUID-2008",
  "summary": "Focus does not remain on Upload/Stop Upload button after activating it with the keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-12-17T12:14:53.000-0500",
  "updated": "2009-02-16T22:34:08.000-0500",
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
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2008/FLUID-2008.a.patch",
      "filename": "FLUID-2008.a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2008/FLUID-2008.b.patch",
      "filename": "FLUID-2008.b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:55:53.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-12T18:13:48.000-0500",
      "body": "In reference to the <https://fluidproject.atlassian.net/browse/FLUID-2008#icft=FLUID-2008>.a.patch\n\n* &#x20;Added new options for elements to be selected on certain events\n* Added new listeners or new code to existing listeners for those events to set the focus on those events\n* Also needed to add a fire event for the onUploadStop event to DemoUploadManager.js\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-13T16:41:56.000-0500",
      "body": "The <https://fluidproject.atlassian.net/browse/FLUID-2008#icft=FLUID-2008>.b.patch replaces the .a patch. I have updated the name of the option to focusWithEvent and added a comment so that it doesn't seem automagical\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:16:26.000-0500",
      "body": "I've reviewed Eli's patch and it looks great. +1. We discussed this issue in depth in the IRC room. Here's a link to the transcript:\n\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-02-13>\n\nI made a minor change to Eli's comment above focusWithEvent, and will commit this patch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:19:07.000-0500",
      "body": "I reviewed, tested, and committed Eli's <https://fluidproject.atlassian.net/browse/FLUID-2008#icft=FLUID-2008>.b.patch. Looking good.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:34:08.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3 (Win XP)\n"
    }
  ]
}
---
Focus does not remain on Upload/Stop Upload button after activating it with the keyboard

Steps to reproduce:

1\) Open the demo version of uploader\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Add some files to the file queue

3\) Using the keyboard, tap the 'tab' key until the "Upload" button has focus

4\) Using the keyboard, tap the 'enter' key to activate the button

Notice that focus isn't on the "Stop Upload" button. The same thing happens after activating the "Stop Upload" button

        