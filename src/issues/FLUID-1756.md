---json
{
  "title": "FLUID-1756",
  "summary": "Opera modifier key to drag problem",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-10-30T14:52:25.000-0400",
  "updated": "2008-11-05T09:59:48.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer"
  ],
  "environment": "Opera OSX, Opera WinXP\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1626/",
      "key": "FLUID-1626",
      "summary": "Keyboard reordering uses command (apple key) instead of ctrl: using Opera"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1626/",
      "key": "FLUID-1626",
      "summary": "Keyboard reordering uses command (apple key) instead of ctrl: using Opera"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The modifier key in Opera Windows to select and drag is not Control. There seems to be no keyboard operations possible.

In Opera OSX the key seems to be the Apple key, things work as expected.

        