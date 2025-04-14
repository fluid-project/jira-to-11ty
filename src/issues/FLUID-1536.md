---json
{
  "title": "FLUID-1536",
  "summary": "Blue selection box flashes around the image reorderer on tabbing into the component, using Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-10T11:25:35.000-0400",
  "updated": "2011-01-10T14:54:22.825-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "Opera 9.6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-19T02:24:19.000-0400",
      "body": "This is probably insoluble. Our strategy for tabbing onto a container involves focus momentarily passing through the container and then being displaced onto the active item. Opera is also unlike the other browsers in its tendency to try to visually honour DOM updates in the middle of an event cycle rather than decently waiting for the end. Further, the blue focus box is a hardwired part of the browser's styling and does not seem to be accessible to user control.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T14:54:21.825-0500",
      "body": "Appears to have been fixed. Possibly with one of the changes made for the Infusion 1.3 release\n"
    }
  ]
}
---
Blue selection box flashes around lightbox on tabbing into the component

Steps to reproduce:

1\) Open the lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>

2\) Tap the tab key to place focus on one of the images. Notice that a blue box flashes around all of the images

        