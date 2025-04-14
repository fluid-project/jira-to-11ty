---json
{
  "title": "FLUID-1577",
  "summary": "Mouse hover styling persists on file names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-09-16T15:41:31.000-0400",
  "updated": "2008-09-19T14:08:04.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3 (Mac OS 10.5, Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1577/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1577/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T15:45:13.000-0400",
      "body": "'screenshot-1' shows all of the filenames having the mouse hover styling\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T15:46:17.000-0400",
      "body": "'screenshot-2' shows 4 files names with the mouser hover styling and 3 without\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-16T19:57:05.000-0400",
      "body": "Probably the best fix for this bug is to let the browser do the highlight and not Fluid.&#x20;\n\nUnfortunately this will mean that IE6 may have some problems.&#x20;\n\nI haven't tested it yet because I don't have access to IE6 at the moment.\n\nI've tested it on IE7, FF3 and Safari 3\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-17T18:38:30.000-0400",
      "body": "Changed it so that CSS handles the hover except in IE6 where hover on row isn't supported, so IE6 uses the old code fix. However it doesn't seem to exhibit the same rollover problem\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:20:36.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5, Win Vista)\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-18T14:19:38.000-0400",
      "body": "Fixed in Uploader2, but need to flow code into Uploader1\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T11:59:20.000-0400",
      "body": "Fixes from Uploader2 applied to Uploader1 for 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T14:08:04.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5, Win XP, Win Vista)\n"
    }
  ]
}
---
Mouse hover styling persists on file names

Steps to reproduce:

1\) Open the uploader

2\) Add some files to the file queue

3\) Using the mouse, place the pointer over a file name. Move the pointer out of the file queue on the files names right side.

Notice that the mouse hover styling remains.&#x20;

Repeating step 3 will allow you to place the mouse hover styling over all of the file names in the queue

        