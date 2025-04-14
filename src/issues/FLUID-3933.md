---json
{
  "title": "FLUID-3933",
  "summary": "After reordering an image in image reorderer, tab goes to the next image instead of next tabable element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2010-12-17T10:44:24.434-0500",
  "updated": "2014-07-07T16:08:04.750-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Chrome 8 (Win XP)\\\nSafari 7 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To reproduce:\
1\. Tab to image reorderer\
2\. Reorder an image to any place except the last\
3\. Press tab. Selection focus goes to the next image in the reorderer, and not the next tabable element. Pressing tab a second time will go to the next tabable element.

        