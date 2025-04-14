---json
{
  "title": "DECA-128",
  "summary": "Extend the /cameras service to check for camera support status and return the requisite error messages.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-06-30T11:31:59.218-0400",
  "updated": "2012-01-10T09:52:17.097-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:03:35.010-0400",
      "body": "This feature was implemented at revision 9969b0ab06 of the server and revision 75798b69a6 of the ui.\n"
    }
  ]
}
---
The /cameras RESTful service should be extended to check the currently connected cameras, compare them to our list of supported cameras, and return back a suitable response containing:

1\. The status of the cameras and any associated error messages\
2\. The list of supported cameras, as JSON

As part of this work, we'll need to do some refactoring of the servers to accommodate this in a more reasonably-factored way, moving camera-related functionality into a Camera object.

        