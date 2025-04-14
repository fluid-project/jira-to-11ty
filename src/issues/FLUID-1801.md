---json
{
  "title": "FLUID-1801",
  "summary": "Page won't scroll during DnD when reorderer contained in a fixed width container",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-11-13T10:11:04.000-0500",
  "updated": "2011-01-10T15:30:49.864-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1993/",
      "key": "FLUID-1993"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-13T10:24:13.000-0500",
      "body": "For Safari 3 and Opera 9.5 on mac OS 10.5, the page will scroll if the pointer is dragged out of the browser past the point of where the fixed width container would end.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T15:30:49.850-0500",
      "body": "Appears to have been fixed, possibly with the changes from made for the Infusion 1.3 release\n"
    }
  ]
}
---
Page won't scroll during DnD when reorderer contained in a fixed width container

Steps to reproduce

1\) Place the image reorderer in a fixed with container

2\) Adjust the browser size so that the horizontal scroll bar appears

Notice that during drag and drop the page won't automatically scroll horizontally

        