---json
{
  "title": "DECA-18",
  "summary": "Modify the existing Decapod server to not depend on the camera hardware, returning test images instead",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2009-10-21T13:39:05.000-0400",
  "updated": "2012-01-10T09:50:57.912-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-18/FLUID-3316.patch",
      "filename": "FLUID-3316.patch"
    }
  ],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2009-10-27T06:30:51.000-0400",
      "body": "Attached is a patch of the changes made to the original dserver.py file. Camera capture was commented out and capture method was rewritten to return jpeg images from a folder \"testData\" by a given index. The capture button of the UI should call this method, with a starting index of 0 and incrementing it each time it is clicked.\n"
    },
    {
      "author": "Boyan Sheytanov",
      "date": "2009-10-27T06:33:12.000-0400",
      "body": "The code in the patch should be enough in order to start testing while building the UI. Still more can be done if we decide to keep the Python & CherryPy implementation.\n"
    }
  ]
}
---
At the moment, the CherryPy server for Decapod makes direct calls to the OS to access the camera hardware. For easier testing and development, we need a stub version of the server that just returns canned images.

The Decapod server code currently resides here:

<http://code.google.com/p/decapod/source/browse/decapod-server/dserver.py>

        