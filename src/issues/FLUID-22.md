---json
{
  "title": "FLUID-22",
  "summary": "Clicking on an item in IE6 makes the item disappear.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2007-06-29T11:30:03.000-0400",
  "updated": "2007-10-22T17:41:57.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP SP2 with IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-06-29T11:40:21.000-0400",
      "body": "This bug does not happen if an item has been selected using keyboard access.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-01T14:25:00.000-0400",
      "body": "This might be affected by upgrading to dojo 0.9, and probably shouldn't be addressed until after the upgrade.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T17:41:57.000-0400",
      "body": "This is no longer an issue since the move to jQuery UI's drag and drop.&#x20;\n"
    }
  ]
}
---
Clicking on white space on a thumbnail or the thumbnail image causes the item to disappear from the Lightbox. Happens in IE6.

Clicking on the text link in the thumbnail activates the link.

It almost looks like the drag and drop action occurs very briefly before the item disappears when mouse is released (i.e. the image "pops" off the background like in a DnD action).  Therefore could be related to Fluid-5.

        