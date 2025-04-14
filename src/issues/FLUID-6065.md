---json
{
  "title": "FLUID-6065",
  "summary": "The focus remains on the \"Browse Files\" button with 2 keyboard tabbings in IE 11 and IE Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Cindy Li",
  "date": "2016-11-14T12:00:36.627-0500",
  "updated": "2024-07-23T13:24:59.687-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 11, IE Edge on Windows 8.1\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6056/",
      "key": "FLUID-6056"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:24:59.515-0400",
      "body": "Could not reproduce with MS Edge 126 on macOS 14.5. Also Internet Explorer is no longer supported.\n"
    }
  ]
}
---
1\. Open [Uploader demo](http://build.fluidproject.org/infusion/demos/uploader/) with IE 11 or IE Edge;\
2\. Use keyboard to tab onto the "Browse Files" button;\
3\. Tab again and the focus continues to remain on the "Browse Files" button.

With the fix for [FLUDI-6056](https://issues.fluidproject.org/browse/FLUID-6056), the first tab focuses on the text filed and the second tab focuses on the button itself. However, these two focuses are visually on the same element, which gives an impression that the 2nd tabbing is not moving to the next DOM element.

        