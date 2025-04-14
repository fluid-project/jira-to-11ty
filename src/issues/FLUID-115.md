---json
{
  "title": "FLUID-115",
  "summary": "IN IE6, selection and deselection highlighting issues when tabbing in/out of lightbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-18T11:49:16.000-0500",
  "updated": "2007-11-19T16:40:35.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Internet Explorer 6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-7/",
      "key": "FLUID-7",
      "summary": "In IE6 & 7, focus style is not being applied to the first item in the Lightbox"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When tabbing to the lightbox, it is hard to see that an image has focus. The selection highlighting (grey) does not appear until "ctrl" is pressed. When tabbing out, the image remains highlighted (grey) until tabbing back into the lightbox.

        