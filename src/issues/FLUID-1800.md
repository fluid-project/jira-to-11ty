---json
{
  "title": "FLUID-1800",
  "summary": "placing the image reorderer in a fixed width container can cause the avatar to be out of sync with the pointer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-11-13T09:30:52.000-0500",
  "updated": "2009-02-04T14:43:32.000-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 Safari 3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1800/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-13T09:32:58.000-0500",
      "body": "'screenshot-1' shows the pointer and avatar out of sync and the location of the drop target\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-04T14:43:32.000-0500",
      "body": "May have been resolved with the update to jQuery UI 1.6rc6 or jQuery 1.3.1.&#x20;\n\nTested using FF2 (Mac OS 10.5)\n"
    }
  ]
}
---
placing the image reorderer in a fixed width container can cause the avatar to be out of sync with the pointer

Steps to reproduce:

1\) Place the image reorderer inside a container with a fixed width (i.e. 1000px wide)

2\) Using the mouse, attempt to drag and drop an image from one of the lower rows.

Notice that the avatar is not under the pointer and that the drop targets don't appear where expected

        