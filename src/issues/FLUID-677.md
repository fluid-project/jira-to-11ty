---json
{
  "title": "FLUID-677",
  "summary": "Keyboard movement incorrect when items are selectable and drop targets but not movable.",
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
  "reporter": "Michelle D'Souza",
  "date": "2008-05-29T19:44:59.000-0400",
  "updated": "2008-09-08T13:35:25.000-0400",
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
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-828/",
      "key": "FLUID-828"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:37:47.000-0400",
      "body": "Corrected at revision 5477\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-08T10:48:33.000-0400",
      "body": "This is still a problem. To see the issue, tab to the second list in the manual test and try to move item 1 below item 3.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T12:45:54.000-0400",
      "body": "It seems that this was really two issues, and two different ones rather than a specific issue with non-movable items. The particular sample in question has a \"fault\" with its CSS styles in that the item collapses when it is in the \"keyboard moving\" mode. Secondly, even correcting the timing of geometry updates, revealed a further issue that the geometry manager did not quite behave correctly in the case of elements which abutted completely - a \"half-open correction\" needed to be added to allow both wrapping and downward motion to work correctly at the same time...\n\nRevision 5483\n"
    }
  ]
}
---
This happens when using the Reorderer API that takes a map of finder functions.  Moving an item with the keyboard past a selectable item that is a drop target, causes the item that is moving to be placed after the next movable item not after the next drop target.

This can be seen in the 'list' manual test:\
<http://build.fluidproject.org/sakai-imagegallery-tool/tests/fluid-tests/manual/list/list.html>

If you tab to the second list and move item 1 down, it will be placed after item 3 instead of after item 2.&#x20;

There is an automated test in ReorderListTests that has been commented out due to this bug.

        