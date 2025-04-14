---json
{
  "title": "CITY-16",
  "summary": "Text layout issues in \"Co-Design (A Community-Driven Approach)\" section",
  "tags": "CITY",
  "project": {
    "key": "CITY",
    "title": "Inclusive Cities"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Done",
  "resolution": "Done",
  "assignee": "Avtar Gill",
  "reporter": "Simon Bates",
  "date": "2018-07-25T10:41:30.261-0400",
  "updated": "2018-09-19T10:36:00.610-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-16/1 Images beside.png",
      "filename": "1 Images beside.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-16/2 Images stacked - text not aligned.png",
      "filename": "2 Images stacked - text not aligned.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-16/3 No images - text not aligned.png",
      "filename": "3 No images - text not aligned.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/CITY/CITY-16/4 No images - text aligned.png",
      "filename": "4 No images - text aligned.png"
    }
  ],
  "comments": []
}
---
We have 4 renderings (viewed on Firefox on Windows 10) of the "Co-Design (A Community-Driven Approach)" section of the website visible at different browser window widths:

* (1) At widest: Text paragraphs and images are displayed in a 2x2 grid layout with images beside the text (attached image "Images beside.png")
* (2) Text paragraphs and images stacked vertically. With the text paragraphs not aligned (attached image "Images stacked - text not aligned.png")
* (3) No images and text not aligned (attached image "No images - text not aligned.png")
* (4) At narrowest: No images and text aligned (attached image "No images - text aligned.png")

Renderings (1) and (4) are good but (2) and (3) have text alignment issues. And (2) wastes a lot of vertical space with the images. With my usual browser width and display settings, (2) is what I see by default (rather than (1)) which is not ideal.

Maybe we can remove (2) and (3) and jump between (1) and (4)?

        