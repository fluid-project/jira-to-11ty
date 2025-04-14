---json
{
  "title": "DECA-13",
  "summary": "Implement the Capture Images user interface for Decapod",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2009-10-21T13:09:17.000-0400",
  "updated": "2012-01-10T09:51:33.609-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2010-01-08T06:39:07.000-0500",
      "body": "As discussed on the demo on Thursday, the issue can now be marked resolved. There are some things that can be improved, but they are not directly connected to delivering the first version of the Capure screen and thus will be addressed while developing the other Decapod components.\n"
    }
  ]
}
---
The wireframes for Capture are described here:

<http://wiki.fluidproject.org/display/fluid/0.5y+Deliverable+Wireframe>

In short, this work will include the creation of the following components and views:

* A Thumbnail Image Browser component, displaying a scrollable list of images vertically along the screen
* The main Capture View, containing an image preview, the image browser, and the various action buttons

As well as the following other tasks:

* Assembling testing data for use while developing Decapod without the camera hardware
* Get the Decapod Python server up and running, and stub out calls to the hardware with sample data
* Review the server's RESTful API for Image Capture--determine if it is appropriate, then implement any required improvements.

        