---json
{
  "title": "FLUID-1625",
  "summary": "[Image Reorderer] drop target can be left but image drops right",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Eli Cochran",
  "date": "2008-09-25T18:52:31.000-0400",
  "updated": "2009-08-07T09:02:23.000-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2967/",
      "key": "FLUID-2967"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1625/FLUID-1625_Step_2.png",
      "filename": "FLUID-1625_Step_2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1625/FLUID-1625_Step_4.png",
      "filename": "FLUID-1625_Step_4.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-26T08:44:59.000-0400",
      "body": "While reviewing a user testing protocol for the reorderer Paul has come across another means to reproduce this issue\n\n1\\) Drag an image from the  first row\n\n2\\) Hold it over an image on the second row as far to the right as possible with the drop target remaining beside the same image\n\n3\\) Drop the avatar\n\nNotice that it drops 1 space too far to the right\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-03-26T14:37:00.000-0400",
      "body": "Since this bug keeps the user from completing their task (impossible to drop where they want to) we'll hold off on any testing until this is fixed.  Once fixed can someone send out a notice so we remember to double back and do some user testing.  This is the only component that has not been user tested.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-27T16:12:23.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T16:22:04.000-0400",
      "body": "Fixed at revision 7705.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-07T09:02:23.000-0400",
      "body": "Tested using:\n\nFF2, FF3, FF3.5, Opera 9.6, Safari 3.2, Safari 4 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n\nAppears to be working properly\n"
    }
  ]
}
---
Notes: May effect other browsers but I only tested the bug on the browsers listed under Environment

1\. In the Image Reorderer, click an image in the center of the image and drag the image two images to the right of it's start position\
2\. Drag the mouse until the drop target displays on the right side of the target image and then move the image back to the left until the drop target switches back to the left side.\
3\. Drop\
4\. The image will drop on the RIGHT side of the image.

        