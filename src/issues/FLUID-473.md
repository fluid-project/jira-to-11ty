---json
{
  "title": "FLUID-473",
  "summary": "Improve the styling of the reorderable tabs sample markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Erin Yu",
  "reporter": "Anastasia Cheetham",
  "date": "2008-04-08T16:10:54.000-0400",
  "updated": "2008-05-27T11:09:46.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-473/reorderableTabs.png",
      "filename": "reorderableTabs.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-15T14:29:54.000-0400",
      "body": "I've created an alternative sortable-tabs example that makes a set of jQuery tabs orderable:\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/jquery-tabs/jquery-tabs.html>\n\nIt is fully functional, but the styles really need the eye of a designer.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-15T14:31:59.000-0400",
      "body": "Erin, could you look at this page, and suggest improvements for the styling applied when using the keyboard to re-order tabs, and with the drag-and-drop hover and drop marker styles?\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/jquery-tabs/jquery-tabs.html>\n\nLet me know if you have any questions.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-17T17:46:32.000-0400",
      "body": "This is Erin's mockup of how the reorderable jQuery tabs example should be styled for keyboard reordering. This styling has now been implemented.\n"
    }
  ]
}
---
The uportal-unordered-list-tabs.html markup example needs the following changes:

* improve the focus highlight styling to make it more  noticable
* make the drop markers less finicky: the drop targets are small, and the marker is even smaller

Whoever does this should work with Erin.

        