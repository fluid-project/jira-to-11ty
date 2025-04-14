---json
{
  "title": "FLUID-4238",
  "summary": "PHP image uploader demo goes into infinite loop in IE when you adjust any settings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Cindy Li",
  "date": "2011-05-16T11:25:29.627-0400",
  "updated": "2015-06-09T13:23:51.478-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 7, 8. Not tried yet with IE 6 & 9\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4238/uploader-strange-error.png",
      "filename": "uploader-strange-error.png"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-05-16T19:47:22.304-0400",
      "body": "I've fixed this bug in my branch of Cindy's image-gallery repo: <https://github.com/colinbdclark/image-gallery> \\\nThis also includes a pretty wild refactoring of the code to IoCify it in the process.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-09-30T14:36:25.494-0400",
      "body": "Cindy thinks this might be related: The attached image (uploader-strange-error.png) shows an error message I see after two clicks on any file type checkboxes. I don't get any pop-ups.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:23:51.476-0400",
      "body": "The image uploader demo no longer exists.\n"
    }
  ]
}
---
To produce:

1\. Open IE\
2\. Go to <http://build.fluidproject.org/uploader/hourly/uploader.html>\
3\. In the input field "allowed file type", enter "\*.gif"\
4\. Click anywhere on the page\
5\. Pop up error message: 'null' is null or not an object\
6\. Click "close" button to close the error popup window, the following error pops up infinitely: object required

        