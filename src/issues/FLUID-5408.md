---json
{
  "title": "FLUID-5408",
  "summary": "IE: The control of shortcut keys to move images around is taken over by IE once no next position for the image to move",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2014-06-05T15:04:35.201-0400",
  "updated": "2024-07-22T15:19:55.163-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE 8, 9 10, 11\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3925/",
      "key": "FLUID-3925",
      "summary": "With no wrapping on, the keyboard movement keystrokes are captured by the browser where a wrap would have occurred"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:19:55.005-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
Open up an IE and follow steps described in "Test 7: Keyboard, Move Image" from "Image reorderer test plan" (<http://wiki.fluidproject.org/display/fluid/Reorderer+QA+Test+Plan+-+Image+Reorderer>)

Use CTRL + J, which moves images to left, as an example:

Keeping pressing CTRL + J to move the image to the leftmost. The next press on CTRL + J triggers the IE default behavior for CTRL + J, which opens up the "view downloads" dialog.

The same issue occurs for other key combinations: CTRL + K, CTRL + I, CTRL + M. Nothing happens with CTRL + M at the next key stroke after the image gets to its bottommost. This might because CTRL + M is not a reserved shortcut key in IE.&#x20;

The same issue occurs in the "versioning" manual test (<http://build.fluidproject.org/infusion/tests/manual-tests/html/versioning.html>) -> Sortable list using FLUID trunk (currently 1.5)

        