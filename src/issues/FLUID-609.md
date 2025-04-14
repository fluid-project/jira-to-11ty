---json
{
  "title": "FLUID-609",
  "summary": "Nested droppables can cause an 'inst has no properties error'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-16T14:53:30.000-0400",
  "updated": "2008-09-08T10:16:30.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-650/",
      "key": "FLUID-650"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-03T19:49:05.000-0400",
      "body": "Update: In the process of updating to jQuery 1.2.6 and 1.5.1 I checked this jQuery ticket: it is still open, and the bug still seems to be present.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:14:47.000-0400",
      "body": "Since we have abandoned use of JQuery droppable, this issue should be resolved.\n\nDrop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    }
  ]
}
---
To replicate the issue use the uPortal mockup:

<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/portal/portal.html>

Pick up the 'Image gallery' portlet and drop it back where it was.&#x20;

This error occurs in the underlying jQuery UI drag and drop library. I've opened a ticket in their bug tracker: <http://dev.jquery.com/ticket/2886>

        