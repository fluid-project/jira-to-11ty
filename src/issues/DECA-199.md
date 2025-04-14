---json
{
  "title": "DECA-199",
  "summary": "Allow the user to sort imported images by Filename",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2012-01-11T12:47:33.685-0500",
  "updated": "2012-06-08T12:16:20.428-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Image Management"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-06-05T10:00:11.000-0400",
      "body": "Special circumstances:\\\n1\\. What if there's already a file with the same name in the import queue?\\\n2\\. How should the import process treat two files with the same name but in different locations?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-08T12:16:20.420-0400",
      "body": "Sort order is purely based on import order\n"
    }
  ]
}
---
Often images a user wants to preserve the order of images according to filename (i.e. as it appears in the file system), but Decapod does not preserve this ordering if importing is done out of order.

Upon importing an image, the original filename is stored to metadata. The UI should allow user to see the original filename and sort it.

Interaction should be "undoable" in case the user wants to revert back to the previous sorting scheme.

        