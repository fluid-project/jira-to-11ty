---json
{
  "title": "FLUID-5398",
  "summary": "Adding more than one file after a successful upload puts the completed styling on all new files in the queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-03T14:38:33.620-0400",
  "updated": "2024-07-22T15:05:23.708-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF 29 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5398/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-03T14:39:25.493-0400",
      "body": "screenshot.png shows that the last two files in the queue have the green bar to the left, even though they haven't yet been uploaded.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:05:23.708-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/>

2\) Upload a single file

3\) After the file has been uploaded, add at least two more files to the queue\
Notice that they also receive the complete styling (green bar to the left).

Note this doesn't happen if only one more file is added; however it will happen even if the two additional files are added separately.

        