---json
{
  "title": "FLUID-3119",
  "summary": "Move cursor displayed over entire layout module, not just grab handle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Chris Hubick",
  "date": "2009-08-20T15:14:33.000-0400",
  "updated": "2011-01-13T10:10:40.044-0500",
  "versions": [
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-13T10:10:39.987-0500",
      "body": "cannot reproduce this issue, the latest layout reorderer doesn't display this behaviour <http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>\n"
    }
  ]
}
---
When using the Layout Reorderer, I set just the title of my module to be the grabHandle, instead of the entire module (as is the default).

The problem is that the move cursor is then being displayed everywhere inside the module, not just when the mouse is inside the the grabHandle - despite the fact that you can only actually use the grabHandle to move the module.

This is caused by the fact that Reorderer.css does '.fl-reorderer-movable-default{cursor:move;}', and the 'fl-reorderer-movable-default' class is still applied to the entire module after initialization.

The 'fl-reorderer-movable-hover' class is, however, only applied to the grabHandle itself - but it is applied when hovering *anywhere* in the entire module.

        