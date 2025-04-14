---json
{
  "title": "FLUID-5",
  "summary": "DnD: Dropping on Invalid Target Causes Item to Disappear",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Shaw-Han Liem",
  "date": "2007-06-27T05:17:05.000-0400",
  "updated": "2007-10-22T13:58:02.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Windows XP SP2 Firefox 2.0.0.4\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-06-28T12:35:18.000-0400",
      "body": "After updating to the latest Dojo and Dijit code, some of this problem is fixed with the following exceptions:\n\nIn IE6 on Windows XP, dropping into an invalid target inside the Lightbox DIV, the selected item appends to the bottom of the list. If you drop the selected item into an invalid target outside the Lightbox DIV, the item disappears.\n\nIn Firefox 2+ on Windows XP, dropping into an invalid target inside the Lightbox DIV, the selected item is inserted at the beginning of the list.\n\nIn Firefox 2+ on Mac, dropping into an invalid target inside or outside the Lightbox DIV, the selected item is inserted at the end of the list (appending seems to be the expected behaviour, since that is what happens in the dojo test files).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-01T14:27:53.000-0400",
      "body": "This issue might be fixed by dojo 0.9, and should only be addressed after the upgrade.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-04T17:16:37.000-0400",
      "body": "This was a difficult to repeat problem where a node had been removed from the DOM and due to some combination of event timing and the alignment of the stars dropping the node onto an invalid target never reinserted the node.  To work around the problem, we overrode the dojo onDndCancel in the reorderer and handled the special case.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T13:58:02.000-0400",
      "body": "Since we've moved to jQuery UI's drag and drop this is no longer relevant.&#x20;\n"
    }
  ]
}
---
In LIghtbox.html the problem occurs when using the mouse to drag an item "off the grid". The item disappears and is no longer accessible to the user.

        