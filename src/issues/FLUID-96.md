---json
{
  "title": "FLUID-96",
  "summary": "Keyboard reordering doesn't work after using the mouse for drag and drop.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2007-11-05T15:56:52.000-0500",
  "updated": "2008-03-11T16:04:07.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-91/",
      "key": "FLUID-91",
      "summary": "Pressing \"enter\" does not always display image"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-06T15:32:33.000-0500",
      "body": "This now works in Lightbox.html and unordered-list.html but does not work in uportal-sortable-tabs-mockup.html. When the focus is put on the anchor in the tab, the keyboard reordering will not work after a mouse drag and drop unless you move focus away from the tabs and move focus back again. Since it was requested that the action of clicking on the tabs be disabled for user testing, I removed the functionality of focusing on the anchor in the tab. This, of course, does not fix what ever the underlying problem is and it should be looked into. &#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-11-28T14:14:22.000-0500",
      "body": "These might actually be the same bug?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-12T15:13:50.000-0500",
      "body": "Can't reproduce this problem on WinXP in FF 2 and IE 7. Could it be Mac only?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-11T16:04:07.000-0400",
      "body": "I think this was fixed while working on <https://fluidproject.atlassian.net/browse/FLUID-257#icft=FLUID-257>.\n"
    }
  ]
}
---
These steps will recreate the behaviour when using the Lightbox inside the gallery tool. The problem does not occur in the stand alone Lightbox.

1\. Open a gallery collection.\
2\. Drag and drop an image.\
3\. Try to use the arrow keys to move focus.

Note that the problem doesn't occur if the keyboard is used to move an image before the mouse drag and drop is used. Likely the problem is related to the lightbox container never getting focus prior to a drag and drop.

        