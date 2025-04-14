---json
{
  "title": "FLUID-4091",
  "summary": "After uploading an image, the wrong image is shown on the \"Add information\" screen",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-02-18T14:12:13.900-0500",
  "updated": "2014-07-30T15:23:14.876-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "FF4 (Mac OS 10.6)\\\nIE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:23:14.874-0400",
      "body": "This demo is no longer operational.\n"
    }
  ]
}
---
This happens if there were already images  uploaded.

Steps to Reproduce

1\) Open the server version of the uploader\
<http://build.fluidproject.org/sakai-imagegallery2-web/site/AddImages/>

2\) Make sure there are already images  uploaded or add some

3\) Upload some additional images\
Notice that on the "Add information" the images that were previously there show up.

        