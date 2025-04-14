---json
{
  "title": "FLUID-56",
  "summary": "Refine the keystroke handling in the ListLayoutHander",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-09T15:35:31.000-0400",
  "updated": "2008-09-30T11:11:15.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T16:10:56.000-0400",
      "body": "The layout handler is now paramaterizes to accept the orientation, but does not yet use it to affect keystrokes.\n\nThe Keyboard a11y plugin does use orientation to affect keystrokes, but the layout handler and reorderer do not yet use that aspect of the keyboard a11y plugin.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:37:23.000-0400",
      "body": "Corrected at revision 5477\n"
    }
  ]
}
---
Currently, the ListLayoutHandler maps both Up and Left arrow to 'previous' and Down and RIght arrow to 'next,' regardless of whether the list is horizontally or vertically oriented.

The ListLayoutHandler should be parameterizes, so that the user can indicate the orientation, and only relevant keystrokes can be trapped.

        