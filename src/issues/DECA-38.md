---json
{
  "title": "DECA-38",
  "summary": "Implement Fix Image UI for Decapod",
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
  "reporter": "Boyan Sheytanov",
  "date": "2010-01-14T04:12:35.000-0500",
  "updated": "2012-01-10T09:43:29.684-0500",
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
We need to support fixing images in Capture (i. e. automatic dewarping). According to the 0.5y deliverable wireframes, this should include:

* Adding a progress indicator (it should be present for a fixed amount of time).
* Adding a message after successful dewarping.
* Removing the yellow "Unfixed" label from the image and enabling the "Compare before/after" button (the image itself will not be changed for now).

This tasks involves only implementing these parts of the UI with no server-side work (it is in a separate task). This mock-up is required so that anyone can check the code out and test without a need to run the server.

        