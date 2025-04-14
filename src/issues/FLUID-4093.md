---json
{
  "title": "FLUID-4093",
  "summary": "When navigating the images with the keyboard, when you switch images to the right, it does not scroll so you cannot see the image you are on.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "John Kremer",
  "date": "2011-02-18T15:26:19.313-0500",
  "updated": "2014-07-30T15:23:01.225-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "Win7, IE9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:23:01.213-0400",
      "body": "This demo is no longer operational.\n"
    }
  ]
}
---
When you select images with the keyboard and move to the right with the arrow key, you cannot see the selected image as it does not scroll with the selections.

<http://build.fluidproject.org/infusion/demos/keyboard-a11y/demo.html>

1\. Select an image with the mouse\
2\. Press the -> arrow key to move images\
3\. The scroll bar does not move when the selected image is 'off screen'

Note: the scroll works as expected when going from left to right.

        