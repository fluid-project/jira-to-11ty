---json
{
  "title": "FLUID-6023",
  "summary": "Uploading size can exceed total size after removing files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-02T11:13:42.820-0400",
  "updated": "2016-11-14T15:33:41.764-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5737/",
      "key": "FLUID-5737",
      "summary": "Uploading size is higher than total size"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6023/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-02T11:15:03.746-0400",
      "body": "screenshot.png shows the uploading size higher than the total size.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-14T15:33:41.764-0500",
      "body": "I've found this problem appears even without removing smaller files from the queue - I've seen it when simply adding a large number of files of varying sizes in Chrome.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Uploader Demo](http://build.fluidproject.org/infusion/demos/uploader/)\
2\. Add several files to the upload queue includes ones smaller and greater than 1mb\
3\. Remove some of the smaller files from the queue\
4\. Upload the remaining files\
Notice that the upload size goes beyond the total size while uploading, but shows the correct size after finishing.

        