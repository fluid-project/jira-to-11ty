---json
{
  "title": "FLUID-4497",
  "summary": "Image gallery demo displays the uploaded images in original sizes with IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2011-10-03T15:47:20.965-0400",
  "updated": "2014-05-22T14:31:17.200-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:31:17.199-0400",
      "body": "The image gallery example is no longer being deployed\n"
    }
  ]
}
---
Ensure your IE6 has flash installed and javascript enabled so that the multi file uploader will be loaded. This issue is with multi file uploader.&#x20;

1\. Open image gallery demo with IE6 - <http://build.fluidproject.org/image-gallery/image-gallery.php>\
2\. Issue #1: The div of section "Uploaded images" shows up as a line without any height, rather than an empty square box\
3\. Upload one or a few images with multi file uploader\
4\. The uploaded images are displayed in original size rather than a scale-down size.

It seems the css classes used to define the size of the div and uploaded images are not taking effect.

        