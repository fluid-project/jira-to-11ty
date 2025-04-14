---json
{
  "title": "FLUID-116",
  "summary": "Quickly dragging an image causes it to freeze.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2007-11-19T12:02:34.000-0500",
  "updated": "2008-01-31T16:31:40.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE6, IE7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-71/",
      "key": "FLUID-71",
      "summary": "Drag and drop is slow on FireFox"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2007-11-19T12:19:22.000-0500",
      "body": "It seems that with more images in the lightbox (i.e. 30 images as opposed to 6), you need to move slower to prevent the image from freezing.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-12T15:01:46.000-0500",
      "body": "Using a Gallery populated with 52 images (most just a few KB, while a dozen over 1MB), and Windows XP with SVN Rev. 4534 of Fluid.\n\nAble to reproduce this exact problem using IE7. The problem only appears to happen is you move the mouse quickly as you begin to drag using the image or anchor in the thumbnail. If you start your drag motion slowly (dragging using the image or anchor)  then accelerate to quick movements, the frozen thumbnail and crossed-out mouse pointer does not appear. If you drag quickly using a white area, the problem doesn't appear to happen.\n\nUnable to reproduce this exact problem using Firefox 2.0, but thumbnail dragging is laggy and not very smooth. However you are able to drag and drop despite it being a little slow.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2007-12-13T11:26:04.000-0500",
      "body": "I can also confirm this on IE6.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-01-31T15:01:51.000-0500",
      "body": "Fixed with Fluid-143.\n"
    },
    {
      "author": "Shaw-Han Liem",
      "date": "2008-01-31T16:31:40.000-0500",
      "body": "Confirmed fixed on IE6. IE7 and Firefox 2 for Windows\n"
    }
  ]
}
---
When you atttempt to drag an image, if you move the mouse quickly the dragged image will freeze on a drop spot. The pointer switches to a crossed out circle. Releasing the mouse button results in the image being placed in the location it froze at.&#x20;

        