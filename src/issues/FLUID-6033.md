---json
{
  "title": "FLUID-6033",
  "summary": "Unable to put focus on image using arrow keys or 'j' and 'k'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "David",
  "date": "2016-11-04T14:42:34.680-0400",
  "updated": "2016-11-07T08:49:13.506-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Chrome 54, Windows 10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-07T08:49:13.503-0500",
      "body": "I was not able to reproduce this issue using Chrome 54 on a Windows 10 VM. You do need to put focus on the group of images before you can change the selection using the arrow and other letter keys. If this is still not working, please re-open with detailed steps to reproduce.\n"
    }
  ]
}
---
changing the focus of images is not working using arrow keys and/or 'j' and 'k'\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>

        