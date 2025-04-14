---json
{
  "title": "FLUID-71",
  "summary": "Drag and drop is slow on FireFox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Michelle D'Souza",
  "date": "2007-10-24T12:59:39.000-0400",
  "updated": "2008-05-27T16:09:03.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-116/",
      "key": "FLUID-116"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-07T12:24:49.000-0500",
      "body": "It is possible that this is slow in the image gallery because the images are large images that are being scaled down. We should try this with smaller images or no images.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-14T14:47:31.000-0500",
      "body": "As a test to see if getting rid of images will be quicker, I hooked up the Reorderer to our \"grid-big.html\" abstract example.  This is a large grid of 1000 orderables.  They are essentially \\<div>'s simliar to those in the Lightbox.html, but without any images.  Loading the page into FF on a Mac led to a spinning beach ball for about 30 seconds, followed by an alert that says \"unresponsive\" script.\n\nShort conclusion:  our current dnd does not scale.\n\nHypothesis:  it's the way we build the \"selector\" to hand to the 'accept' option to jQuery().droppable().  That is a string of 1000 id's separated by a comma.  Now, since we know exactly which elements are the droppables, why can we not pass an array to jQuery().droppable()?  Why must it be something that requires jQuery() to figure that out again?\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-15T16:02:31.000-0500",
      "body": "Downgraded to critical – still intend to fix for release 0.1, but no longer a blocker.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-16T13:45:28.000-0500",
      "body": "To determine if the slow speed is due to repeated calls of the orderable finder function within the Reorderer, I placed a console.debug() at the top of that  function to print out whenever it is called.  I tested with Lightbox.html.\n\nWIth respect to drag-and-drop, the orderable finder function is called once, ever.  It is called from Reorderer.\\_enableDragAndDrop().\n\n(With respect to the keyboard, the finder function is called every time a cursor key is pressed, regardless of whether it is for navigation or moving a thumbnail.  See <http://issues.fluidproject.org/browse/FLUID-113>).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-27T12:17:15.000-0400",
      "body": "Drag and drop does not seem to be slow on FireFox. Perhaps the change to the 'trunk' version of jQuery UI helped.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-27T16:09:03.000-0400",
      "body": "Fixed.\n"
    }
  ]
}
---
The item movement is slow to respond when using the Reorderer in Firefox. This is especially apparent with many items and complex markup such as in the Lightbox.&#x20;

        