---json
{
  "title": "FLUID-1490",
  "summary": "Dragging an image causes it to flash below the first image of the last row",
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
  "date": "2008-09-09T09:25:45.000-0400",
  "updated": "2008-09-11T09:29:14.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T14:40:21.000-0400",
      "body": "Fixed at revision 5504\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:29:14.000-0400",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Dragging an image causes it to flash below the first image of the last row

Steps to reproduce:

1\) Open the lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Drag an image. Notice that it flashes below the first image of the last row

        