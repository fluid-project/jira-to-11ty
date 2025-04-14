---json
{
  "title": "FLUID-4486",
  "summary": "Image uploader fails too late when uploading a large file in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-09-30T15:52:26.349-0400",
  "updated": "2015-06-10T10:39:48.075-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:39:48.073-0400",
      "body": "The image uploader demo no longer exists. The uploader will also not queue items that are larger than the max upload size stated in its options.\n"
    }
  ]
}
---
The image uploader fails too late when uploading a large file. The user has to wait until the file has completely uploaded before receiving an error. The error should be presented upon queuing the file, not after uploading.

To reproduce:\
1\. Add a large image file that exceeds the limit (i.e. 30MB)\
2\. Upload the image.\
3\. Note: error message displayed after uploading.

        