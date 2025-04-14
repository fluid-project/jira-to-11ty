---json
{
  "title": "FLUID-650",
  "summary": "Clicking drag bar in uPortal example causes \"inst has no properties\" error.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-05-27T12:54:41.000-0400",
  "updated": "2008-05-27T13:31:46.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-609/",
      "key": "FLUID-609",
      "summary": "Nested droppables can cause an 'inst has no properties error'"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-27T13:13:30.000-0400",
      "body": "I can only recreate this using a portlet with a nested reorderer. It is a problem with the underlying jQuery library. See Fluid-609\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-27T13:31:46.000-0400",
      "body": "Duplicate of 609:\\\n<http://issues.fluidproject.org/browse/FLUID-609>\n\nHappens only with a nested reorderer.\n"
    }
  ]
}
---
Clicking (mouse down+up) on the title / dragbar of a portlet causes a "inst has no properties" error.

Upon further inspection, this is caused if the click (mouse down+up) is "dirty" - i.e. if there is slight movement of the mouse when performing the click. If the mouse is perfectly still and the click is done, the "inst has no properties" error does not occur.

Especially an issue for users with motor control difficulty and users with optical mice.

        