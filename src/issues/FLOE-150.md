---json
{
  "title": "FLOE-150",
  "summary": "Initial cursor position in text editor window jumps around depending on where in the window the mouse is clicked. (FF only)",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2014-01-07T16:37:46.233-0500",
  "updated": "2014-01-13T15:26:40.175-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-01-13T15:26:40.175-0500",
      "body": "It appears that this is also fixed by using the \\<br> workaround for the contenteditable div as documented in the comment for <https://fluidproject.atlassian.net/browse/FLOE-151#icft=FLOE-151>. See that comment for details. <http://issues.fluidproject.org/browse/FLOE-151?focusedCommentId=24100>\n"
    }
  ]
}
---
The initial location of the cursor depends on where in the text editor window the mouse is clicked.  Clicking on the left side lands the cursor on the upper left, clicking on the right side lands the cursor in the upper right.  When the cursor is at the upper right, text cannot be entered into the editor window (entering text simply moves the cursor to the bottom left).&#x20;

Note: tabbing to the text editor window lands the cursor at the top left.&#x20;

        