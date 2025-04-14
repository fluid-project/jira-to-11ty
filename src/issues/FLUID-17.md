---json
{
  "title": "FLUID-17",
  "summary": "Tooltip is not being styled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Shaw-Han Liem",
  "reporter": "Jonathan Hung",
  "date": "2007-06-28T12:14:49.000-0400",
  "updated": "2007-10-22T15:53:57.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-06-29T09:42:06.000-0400",
      "body": "Related to Fluid-14.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-08-24T07:56:34.000-0400",
      "body": "The tooltip has been removed.\n"
    }
  ]
}
---
Tooltips are no longer styled in Lightbox after Dojo updated in Fluid SVN.

This is because Dijit.Tooltip is using new classes to style the Tooltip.

        