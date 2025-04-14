---json
{
  "title": "FLUID-1758",
  "summary": "Springboards: No drop target for themed reorderable tabs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-10-30T14:59:00.000-0400",
  "updated": "2011-01-14T09:53:25.460-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "FF2  (Mac OS 10.5, Win XP, Win2000)\\\nFF3 (Win2000)\\\nIE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1949/",
      "key": "FLUID-1949"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1975/",
      "key": "FLUID-1975",
      "summary": "FSS: Tab helpers need refactoring"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1758/fluid-1758.patch",
      "filename": "fluid-1758.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1758/fluid-1758-b.patch",
      "filename": "fluid-1758-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1758/fluid-1758-c.patch",
      "filename": "fluid-1758-c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1758/fluid-1758-d.patch",
      "filename": "fluid-1758-d.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1758/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T15:00:00.000-0400",
      "body": "'screenshot-1' shows that there is no drop taget for the themed sortable tab example\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-30T15:36:30.000-0400",
      "body": "Closed in error\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T13:57:16.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-12T16:14:33.000-0500",
      "body": "I don't see any drop targets in FF2 either, and although there is a sort of one in Opera, it is very misshapen (Windows)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T16:17:51.000-0500",
      "body": "same issue in safari as with opera\n\nI've updated the environments to include FF\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-13T20:28:28.000-0500",
      "body": "Tabs now have more specific and effective drop markers\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-13T20:29:01.000-0500",
      "body": "Attached patch implements a more specific drop marker appearance\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-15T10:30:20.000-0500",
      "body": "The patch looks ok (to my untrained css eyes) and it does produce nice drop-markers for the tab examples.\n\nBUT: It breaks the drop-markers for the list and grid examples on the same page. Before the patch, they were nice red lines, with the patch there is no red involved, and the grid example is very disorienting.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-15T15:31:59.000-0500",
      "body": "This last patch looks great!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-16T09:58:48.000-0500",
      "body": "Still not working in FF2, I will change the environments to reflect this.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-01T14:59:21.000-0400",
      "body": "I do not see this work right on FF3 either - there are sometimes drop targets, but their appearance and width is inconsistent. At the right, I get a thick target - one position to the left, I get a thin target, and leftward of that I get no target at all.\\\n(in 1.0 release)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-04T14:37:39.000-0500",
      "body": "This example is no longer used\n"
    }
  ]
}
---
No drop target for themed reorderable tabs

Steps to reproduce

1\) Open the Reorderer Springboard example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html#>

2\) Using the mouse, drag and drop the tabs in example 4 or 5

Notice that no drop targets appear

        