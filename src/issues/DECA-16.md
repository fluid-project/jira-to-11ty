---json
{
  "title": "DECA-16",
  "summary": "Implement the main Capture view screen for Decapod",
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
  "date": "2009-10-21T13:18:54.000-0400",
  "updated": "2012-01-10T09:50:46.610-0500",
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
  "comments": []
}
---
The wireframes for this task are located at:

<http://wiki.fluidproject.org/display/fluid/0.5y+Deliverable+Wireframe>

We need to create an overall component that assembles the Thumbnail Browser, provides an area of the screen for image previews, as well as the required action buttons, particularly the Take Picture button.

This component should make an AJAX call to the server to initiate the capture process, and then retrieve the large and small images to display in the browser.

        