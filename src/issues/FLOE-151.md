---json
{
  "title": "FLOE-151",
  "summary": "Initial cursor position in text editor window is misaligned (FF only).",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Dana",
  "date": "2014-01-07T16:41:12.973-0500",
  "updated": "2014-01-14T07:52:35.364-0500",
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
      "date": "2014-01-13T15:11:01.947-0500",
      "body": "Using this old Firefox bug as a clue (<https://bugzilla.mozilla.org/show_bug.cgi?id=389321>) I was able to bypass this issue by addubg a \\<br> into the contenteditable div using Firebug.\n\nTo reproduce this \"fix\":\\\n1\\. Load the metadata editor demo in Firefox.\\\n2\\. Before doing anything open Firebug.\\\n3\\. Locate the contenteditable div and add a \\<br /> to the HTML using Firebug. Save it and don't refresh the page \\\n4\\. Click the contenteditable div - notice that the cursor now appears in its proper place.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-14T07:52:35.364-0500",
      "body": "Wouldn't this mean you'd get a \\<br> tag in the output though?\n"
    }
  ]
}
---
When tabbing to or mouse-selecting the text editor window, the initial cursor position lies across the boundary of the toolbar and the editable area, rather than fully inside the editable area.

        