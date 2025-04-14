---json
{
  "title": "FLUID-1297",
  "summary": "OSDPL Content: Alt text is being displayed instead of thumbnail images for pattern index pages.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T14:49:12.000-0400",
  "updated": "2008-10-29T10:44:37.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T14:19:22.000-0400",
      "body": "Iteration20\n\nUpgrading from v1.2 ImageCache to v2 fixed this problem.\n\nIn the process I've also changed the ImageCache scaling action to use the new scale and crop action.\n"
    }
  ]
}
---
Pattern index pages should show an image instead of the alt text of images.

Also, for patterns with more than 1 image, only 1 image should be shown, not all of them.

        