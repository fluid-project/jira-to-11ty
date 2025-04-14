---json
{
  "title": "FLUID-4485",
  "summary": "Incorrect error message displayed after uploading image that exceeds limit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-09-30T15:49:27.934-0400",
  "updated": "2015-06-10T10:35:47.861-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE8 Win7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4485/Image-Uploader-Large-File.PNG",
      "filename": "Image-Uploader-Large-File.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:35:47.834-0400",
      "body": "the uploader server demo no longer exists, and the uploader does report an error message for files that are too large\n"
    }
  ]
}
---
After uploading an image file that exceeds file size limit, the error message displayed is incorrect and unhelpful.

The error message should read something like: "Image file exceeds size limit" or something to that effect.

To reproduce:\
1\. Choose a large image file that exceeds the limit (i.e. 30MB)\
2\. Upload\
3\. Note: the error message is incorrect after uploading.

        