---json
{
  "title": "DECA-68",
  "summary": "Reordering with the keyboard posts the new order on every move",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-30T11:55:24.000-0400",
  "updated": "2012-05-25T13:34:08.774-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:34:08.765-0400",
      "body": "The page for managing pages has been removed. This interaction no longer exists.\n"
    }
  ]
}
---
Currently if you are moving a thumbnail using the keyboard the order is posted to the server every time you press an arrow key. We should only post when the ctrl key is released - after the move is complete.&#x20;

        