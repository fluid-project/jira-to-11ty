---json
{
  "title": "FLUID-6658",
  "summary": "Narrator does not read image caption",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-07T09:28:17.337-0400",
  "updated": "2021-07-27T07:51:18.836-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "MS Edge 91 & Narrator (Win 10)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1. Open the [Image reordered demo](https://build-infusion.fluidproject.org/demos/reorderer/imagereorderer/)
2. With Narrator on, use the keyboard to focus one of the reorderable images
3. Notice that it only announces the link label. e.g. "1 of 6 moveable" and not the image's caption "Dragonfruit".

        