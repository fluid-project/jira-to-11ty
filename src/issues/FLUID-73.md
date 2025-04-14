---json
{
  "title": "FLUID-73",
  "summary": "Drop target needs a CSS classname and Styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Shaw-Han Liem",
  "date": "2007-10-25T16:25:31.000-0400",
  "updated": "2011-01-28T12:12:31.574-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Shaw-Han Liem",
      "date": "2007-10-25T16:29:53.000-0400",
      "body": "We need to pass a \"hoverClass\" into the jQuery sortable, so that we can style the drop target.\n\nThen we need some CSS to make it look like a \"drop hint\" (i.e. colored dotted line in between two images that indicates the new potential position of a dragged item).\n\nWe may want to use an arrow that is slightly raised above the line of images and/or make it a more solid line.  Visual treatment of this indicator needs to be decided from a UE perspective.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-06T16:16:16.000-0500",
      "body": "With the commit for <https://fluidproject.atlassian.net/browse/FLUID-57#icft=FLUID-57>, the drop target is now styled using the class name \"orderableDropMarker\".\n\nAlso, the tag used for the drop marker is the same as that of the orderable items.  That is, if the orderables are \\<div> elements, the drop marker is also a \\<div>.  If the orderables are \\<li> elements, the drop marker is an \\<li>.  And so on.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-28T12:09:46.045-0500",
      "body": "Reopening these issues to add the reorderercomponent to them.\n"
    }
  ]
}
---

        