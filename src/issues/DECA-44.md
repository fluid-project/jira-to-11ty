---json
{
  "title": "DECA-44",
  "summary": "Have Decapod UI span vertical space ",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-03-05T10:24:27.000-0500",
  "updated": "2010-04-12T13:08:46.000-0400",
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
Currently we are using a fixed height for the thumbnail div which determines the rest of the layout.

This may not be ideal:\
1\. Restricts the maximum resolution for the UI to the height of the thumbnail div\
2\. Doesn't take advantage of browser's verical space and scrolling capabilities.

Consider having the Decapod UI span the available vertical span in a browser window, or a new design that uses vertical scrolling more effectively in a browser.

        