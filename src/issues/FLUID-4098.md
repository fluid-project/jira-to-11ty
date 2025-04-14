---json
{
  "title": "FLUID-4098",
  "summary": "Bad error message when uploading files that exist",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "John Kremer",
  "date": "2011-02-22T10:41:38.574-0500",
  "updated": "2015-06-09T10:48:46.569-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win 7 IE9\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4098/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4098/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4098/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    }
  ],
  "comments": [
    {
      "author": "John Kremer",
      "date": "2011-02-22T10:44:55.322-0500",
      "body": "Error message when uploading a single file that alreay exists.\n"
    },
    {
      "author": "John Kremer",
      "date": "2011-02-22T10:47:22.905-0500",
      "body": "Error message when uploading a file that exists from AddImages page as oppose to Add Single Image\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:48:46.567-0400",
      "body": "The image gallery uploader demo no longer exists.\n"
    }
  ]
}
---
When you try and upload a single file that already exists, there is a long error message page.\
1\. upload a file\
2\. upload the same file again\
3\. press save\
<http://build.fluidproject.org/sakai-imagegallery2-web/site/singleFileUpload>

When you try and upload a file that exists from the AddImages page, you get a poor error message as well.\
1\. upload a file(s)\
2\. upload the file(s) again\
3\. error message below in screen shot

<http://build.fluidproject.org/sakai-imagegallery2-web/site/AddImages/>

        