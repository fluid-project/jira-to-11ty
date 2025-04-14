---json
{
  "title": "FLUID-161",
  "summary": "Keystrokes for navigation and moving orderables should be configurable.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Joseph Scheuhammer",
  "date": "2008-01-17T10:13:38.000-0500",
  "updated": "2008-04-07T15:11:45.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-154/",
      "key": "FLUID-154",
      "summary": "Create a reusable keyboard accessibility library"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-89/",
      "key": "FLUID-89",
      "summary": "Key strokes for navigation and drag-and-drop conflict with browser/OS/AT defined keystrokes."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-461/",
      "key": "FLUID-461"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-154/",
      "key": "FLUID-154"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-259/",
      "key": "FLUID-259"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-18T10:15:44.000-0400",
      "body": "Revision 4745 implements an interim pluggable key set model for the Reorderer. The next step is to work with multiple key sets so that reordering will work with both the screen reader compatible set as well as the more natural CTRL+arrow keys.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-19T15:52:24.000-0400",
      "body": "The generic-lightbox example now works with Jaws and Window-Eyes compatible keystrokes: CTRL + i, j, k, m.\\\nThe regular lightbox works with the original keystrokes: CTRL + arrow keys.\n\nThe next step in this refactoring is to allow multiple keysets in the same Reorderer thereby allowing CTRL + arrow keys as well as the screen reader compatible keyset.&#x20;\n"
    }
  ]
}
---
Currently use of the arrow keys for navigating among orderable items and re-ordering them is fixed.  They are defined in Reorderer.js.  These should be parameterized allowing the Reorderer to be (re)configured in terms of the keystrokes used.

        