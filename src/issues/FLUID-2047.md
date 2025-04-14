---json
{
  "title": "FLUID-2047",
  "summary": "page links are not displayed in front of the previous and next links in the renderer version of pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-01-05T10:58:31.000-0500",
  "updated": "2009-01-08T08:32:21.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2048/",
      "key": "FLUID-2048"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2047/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-05T10:59:23.000-0500",
      "body": "'screenshot-1' shows the page links above the previous and next links, instead of in front of them\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:08:32.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-07T15:33:51.000-0500",
      "body": "Fixed at revision 6278\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-08T08:32:21.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
page links are not displayed in front of the previous and next links in the renderer version of pager

Steps to reproduce:

1\) Open the renderer version of Pager\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html>

Notice that the page links are displayed above the previous and next links instead of in front of them

        