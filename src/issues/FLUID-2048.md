---json
{
  "title": "FLUID-2048",
  "summary": "previous and next links are not displayed in the renderer version of pager; using Opera",
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
  "date": "2009-01-05T11:00:58.000-0500",
  "updated": "2009-01-08T08:32:45.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2047/",
      "key": "FLUID-2047",
      "summary": "page links are not displayed in front of the previous and next links in the renderer version of pager"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2048/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-05T11:01:52.000-0500",
      "body": "'screenshot-1' shows the previous and next links missing\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:08:22.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-06T14:26:40.000-0500",
      "body": "Possibly related to FLUID-2047?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-07T15:33:30.000-0500",
      "body": "Fixed at revision 6278\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-08T08:32:45.000-0500",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
previous and next links are not displayed in the renderer version of pager

Steps to reproduce:

1\) Open the renderer version of pager\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html>

Notice that the previous and next links are not displayed

        