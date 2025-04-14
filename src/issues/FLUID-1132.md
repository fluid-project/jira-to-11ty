---json
{
  "title": "FLUID-1132",
  "summary": "Drop marker not properly updated right away",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2008-08-11T16:51:22.000-0400",
  "updated": "2008-09-08T09:05:02.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:00:57.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:05:02.000-0400",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\n"
    }
  ]
}
---
Sometimes, after a drop marker has been shown (i.e. at least one drag-drop has been carried out), the marker starts out at that old position before updating to the 'right' spot on subsequent drags.

To reproduce:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/portal/simple-portlets.html>

1\) Use the mouse to drag portlet 1 and drop it between portlets 3 and 4\
2\) Slowly pick portlet 8 up and drag it downward, as if to drop it at the bottom of the column.

As soon as the mouse is over portlet 9, the drop marker will show up in column 1, between portlets 1 and 4. Move the mouse a bit further down, and the drop marker will shift to where it's supposed to be.

These particular portlets are just an example, any combination will do.

I'm not sure whether or not this is Layout Customizer specific, or would happen with other flavours of the Reorderer.

        