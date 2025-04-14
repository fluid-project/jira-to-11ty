---json
{
  "title": "FLUID-3629",
  "summary": "Drag avatar incorrectly styled.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2010-04-12T13:58:34.000-0400",
  "updated": "2017-03-13T11:08:39.549-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Image Reorderer"
  ],
  "environment": "Windows XP Firefox 3.6, IE8\\\nMac OS 10.8.5 Firefox 29.0.1, Chrome 35.0.1916.114, Safari 6.1 (8537.71)&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "beth.mejsullivan",
      "date": "2014-05-30T16:04:56.702-0400",
      "body": "I found a same issue while testing this test plan <http://wiki.fluidproject.org/display/fluid/Reorderer+QA+Test+Plan+-+Image+Reorderer>.\n\nEnvironment MacOSX 10.8.5, Firefox 29.0.1,Chrome 35.0.1916.114&#x20;\n\n\"\\\nTest 2: Move to Last Position\n\nProcedure\\\nOpen the browser and navigate to the specified URL\\\nUsing the mouse, hover over one of the images\\\nUsing the mouse, press and hold the 'left-mouse-button' down\\\nUsing the mouse, drag the avatar after the last image\\\nUsing the mouse, release the 'left-mouse-button' over a drop target\\\nExpected Results\\\nThe avatar should drop and move the image to the new location\\\nThe other images should shift to fill in the empty space where the image was originally located\\\nStop Test\\\nRefresh the browser to return the page to its initial state\\\n\"\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>\
When dragging, the drag avatar (image) is not correctly styled:

In FF 3.6

* centered thumbnail label becomes left justified and turns into a link
* thumbnail image changes in size
* a black horizontal line appears below the thumbnail image.
* thumbnail dimension increases in size

In IE8

* the drag avatar only consists of an image.
* text and box styling not visible.
* thumbnail image changes in size.

\[See comments for Mac OS 10.8.5 issues]

        