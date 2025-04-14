---json
{
  "title": "FLUID-6692",
  "summary": "Height of mobile UIO drawer buttons are too narrow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-10-21T14:34:37.073-0400",
  "updated": "2021-10-21T14:34:37.073-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6692/Screenshot 2021-10-21 143203.png",
      "filename": "Screenshot 2021-10-21 143203.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6692/Screenshot 2021-10-21 143356.png",
      "filename": "Screenshot 2021-10-21 143356.png"
    }
  ],
  "comments": []
}
---
The buttons for mobile UIO are too narrow and can be easily missed. Visually, it would appear the entire bar will open UIO, but approximately 65% of that space is empty.

Specifying a height on the buttons should fix this issue.

        