---json
{
  "title": "DECA-36",
  "summary": "Reorderer does not scroll if drag and drop dragged to edge of grid",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2010-03-11T15:45:33.000-0500",
  "updated": "2012-05-25T13:31:23.784-0400",
  "versions": [
    "0.3",
    "0.4",
    "0.5a"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": "Ubuntu 9.10, FF 3.5.8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-17T13:20:50.948-0400",
      "body": "Problem still exists. Tested again on Ubuntu 9.10, Infusion 1.2, and FF 3.5.8.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-14T16:33:22.708-0400",
      "body": "Ubuntu 9.10, FF 3.6.2, Infusion 1.2, decapod-ui 199:1536be1d9a41&#x20;\n\nBehaviour has changed - when dragging to the bottom edge, the whole browser pane scrolls and not the thumbnail panel.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-14T16:35:04.518-0400",
      "body": "Elevate for bug parade?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:30:22.801-0400",
      "body": "The ui for managing the pages has been removed.&#x20;\n"
    }
  ]
}
---
When dragging an item to the edge of the image reorderer, the reorderer does not scroll offscreen items into view.

        