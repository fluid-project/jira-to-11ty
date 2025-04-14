---json
{
  "title": "FLUID-119",
  "summary": "Thumbnail image changes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-19T13:46:56.000-0500",
  "updated": "2007-11-19T16:59:06.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox (mac and winxp)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-108/",
      "key": "FLUID-108",
      "summary": "Lightbox image changes on FF2 the first time it gets focus"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Thumbnail images which are stretched (original image smaller in width than thumbnail) shows the top portion of the image initially and while being dragged. After being dragged, the thumbnail image is now of the lower portion of the image.

        