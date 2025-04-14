---json
{
  "title": "FLUID-6070",
  "summary": "Dynamic reorder breaks after reordering items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2016-11-14T16:16:52.835-0500",
  "updated": "2022-02-03T04:39:18.286-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 11 (Win 8.1)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6004/",
      "key": "FLUID-6004",
      "summary": "Grid reorderer - letters will disappear when reordered a certain way"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6007/",
      "key": "FLUID-6007",
      "summary": "Image reorderer - fruits will disappear when reordered a certain way"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6012/",
      "key": "FLUID-6012",
      "summary": "Bug found of the deleting of rows when reordering the table rows."
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6070/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-14T16:17:32.001-0500",
      "body": "screenshot.png shows that \"This is 1\" is missing and that new items (\"This is 4\" and \"This is 5\") are added outside of the list.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-02-03T04:39:18.270-0500",
      "body": "IE11 is no longer part of our supported profile\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the dynamic reorderer manual test\
2\. Move "This is 1" to the bottom\
3\. Move "This is 3" to the bottom

Notice that "This is 1" disappears, and that if you click on "New Item", all new items are added outside of the list.

        