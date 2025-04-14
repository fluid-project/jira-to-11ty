---json
{
  "title": "FLUID-4489",
  "summary": "Yellow focus outline on Browse button wrong size/shape",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-03T10:44:21.900-0400",
  "updated": "2015-06-26T10:15:26.982-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE8, IE9 on Win 7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4489/Uploader - Windows Internet Explorer_2011-10-03_11-02-06.png",
      "filename": "Uploader - Windows Internet Explorer_2011-10-03_11-02-06.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4489/uploader-yellow-outline.png",
      "filename": "uploader-yellow-outline.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T10:45:19.082-0400",
      "body": "This file (uploader-yellow-outline.png) shows the yellow outline looking smaller than the button.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-10-03T11:02:46.063-0400",
      "body": "IE 8, Win7\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:44:24.896-0400",
      "body": "Cannot reproduce in IE 11 (which is currently the latest version of  IE supported), also this was likely an issue with the Flash version, which has been removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:24.704-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The yellow outline that indicates focus on the Browse/Add More button is smaller than the actual button, and so overlaps it, looking odd.

        