---json
{
  "title": "FLUID-1116",
  "summary": "OSDPL Content: Investigate (& implement if possible) the display of multiple images for solution & example images",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-08-07T14:14:08.000-0400",
  "updated": "2014-04-02T16:35:54.861-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-08-07T14:14:16.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-23T15:43:18.000-0500",
      "body": "Could this be a possible solution?\n\n\"imagefield\\_import.module will allow users with the proper role to be able to import a large number of images into a CCK content type that contains an imagefield.\"\n\n<http://drupal.org/project/imagefield_import>\n"
    }
  ]
}
---
When migrating the Uploader pattern, I was unable to use multiple images (at least in an understandable way) in the Examples to illustrate workflow in a pattern. I think we may need something that is more like a gallery when folks want to use images to illustrate a workflow.

        