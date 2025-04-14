---json
{
  "title": "FLUID-92",
  "summary": "Last drag & drop command (via mouse) not recorded.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-05T13:10:36.000-0500",
  "updated": "2007-11-26T14:30:48.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-14T18:54:50.000-0500",
      "body": "The reorder-indexes that are being sent to the server contain an invalid index when the reordering is done with the mouse. In the above example containing a, b, c, d, if the reordering is done with the keyboard, the indexes 0, 1, 2, and 3 are sent to the server. If the same reordering is done with the mouse, the indexes 4, 1, 2, and 3 are sent to the server. This may be related to the creation of the avatar which is a clone of the node being dragged.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-20T10:18:41.000-0500",
      "body": "To fix this bug we stopped using the jQuery built in avatar creation and created our own clone that we sanitized. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2007-11-26T14:30:48.000-0500",
      "body": "Verified the fix using Firefox on Mac 10.5.1\n"
    }
  ]
}
---
When an image is moved, via mouse, it does not record the last position it was moved to. When the screen is refreshed it is reordered to the second last location. I.e. There are four images a, b, c, d in location 1, 2,3,4 respectively. Moving image 'a' to position 2 and refreshing the page results in the images being ordered as a, b, c, d again. If image 'a' is moved to location 2 and then to location 4, when the page is refreshed, it will be ordered as b,a,c,d. Note that the keyboard process for this works correctly.

        