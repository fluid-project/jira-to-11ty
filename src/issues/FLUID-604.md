---json
{
  "title": "FLUID-604",
  "summary": "Drop target not being drawn when portlet dragged over locked portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T14:14:54.000-0400",
  "updated": "2008-05-27T12:35:42.000-0400",
  "versions": [
    "0.3"
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
      "author": "Michelle D'Souza",
      "date": "2008-05-16T10:48:06.000-0400",
      "body": "The only time I was able to reproduce this is when I drag very quickly. What's happening underneath in this case is that we never get any mouse movement events.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-27T12:35:42.000-0400",
      "body": "Appears to be fixed.\n"
    }
  ]
}
---
In the uPortal example, a drop marker does not appear below the locked portlet despite it being a valid drop location. This only appears to happen if you are dragging the top-most portlet in the right column. Doesn't seem to be a problem with any other portlet.

To reproduce:

* drag the Bookmarks portlet left to the locked portlet so it is hovering over the bottom-half . Release. The bookmark portlet should now appear below the locked portlet.

        