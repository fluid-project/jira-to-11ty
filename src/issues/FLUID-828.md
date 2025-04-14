---json
{
  "title": "FLUID-828",
  "summary": "Non movable items: mouse move causes breakage of keyboard navigation.",
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
  "date": "2008-06-26T15:58:17.000-0400",
  "updated": "2008-09-30T11:25:59.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
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
      "url": "/browse/FLUID-677/",
      "key": "FLUID-677",
      "summary": "Keyboard movement incorrect when items are selectable and drop targets but not movable."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:38:05.000-0400",
      "body": "Corrected at revision 5477\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-08T10:53:43.000-0400",
      "body": "Keyboard navigation is still broken when there are non-movable items in the list.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T12:47:37.000-0400",
      "body": "Re-fixed at revision 5483, see comments on <https://fluidproject.atlassian.net/browse/FLUID-677#icft=FLUID-677>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T14:51:25.000-0400",
      "body": "I misread the description, and this is a different issue - it is specifically caused when a keyboard operation follows a mouse operation. This has been resolved by resolving <https://fluidproject.atlassian.net/browse/FLUID-1141#icft=FLUID-1141> - the avatar in general must be placed outside the container for even further reasons in addition to those listed there, since in general it cannot be depended that user-supplied selectors to discover orderables will not in addition discover the avatar - this was causing this issue, since the avatar was \"left behind\" in the container at the moment when the geometry was refreshed (end drag), but was detached from the document at the time when the keyboard navigation was requested. This caused a \"DOM stone\" which was considered the target of the operation which then failed.\\\nNote on JQuery draggable implementation - we do **not** in general seem to have the flexibility to get a callback after the time the avatar is removed, since the end drag sequence is user callback followed by clear. However, JQuery draggable **will** respect avatar parent placement, and not attempt to reattach it to the document if it discovers that it is already present.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T14:52:33.000-0400",
      "body": "Fixed finally (hopefully!) at revision 5486.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:25:59.000-0400",
      "body": "Verified using:\n\nFF2 (Mac OS 10.5)\n"
    }
  ]
}
---
This happens when using the Reorderer API that takes a map of finder functions. After doing a mouse move to a position adjacent to a non movable item, the arrow keys do not move focus past the non movable item.

This can be seen in the 'list' manual test:\
<http://build.fluidproject.org/sakai-imagegallery-tool/tests/fluid-tests/manual/list/list.html>

Steps to recreate:

1\. Drag item 1 in the second list and drop it after item 3.\
2\. Press the down arrow key

The focus will remain on item 1. Up arrow will move focus, however using the up arrow to move focus repeatedly will eventually run into the same issue. Trying to move focus up from item 4 to item 1 will not work.

        