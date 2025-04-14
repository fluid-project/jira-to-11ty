---json
{
  "title": "FLUID-5737",
  "summary": "Uploading size is higher than total size",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2015-08-07T16:31:03.456-0400",
  "updated": "2021-07-29T01:30:31.674-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Chrome, Firefox, Safari\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6023/",
      "key": "FLUID-6023"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5737/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-08-07T16:31:48.685-0400",
      "body": "screenshot.png shows the uploaded size being larger than the total size.\n"
    },
    {
      "author": "Neel Dalsania",
      "date": "2016-03-06T14:39:56.233-0500",
      "body": "I think, I resolved this issue\\\nThere was problem with the uploadingSize variable present in fluid.uploader.updateTotalProgress, instead of sum of batch.totalBytesUploaded and that.queue.sizeOfUploadedFiles() if we use that.queue.sizeOfUploadedFiles() only then it works perfectly\n\nShould i sent a PR for the issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-07T10:45:35.446-0500",
      "body": "@@Neel Dalsania feel free to submit a pull request. The proposed fix can be discussed further then.\n"
    },
    {
      "author": "Neel Dalsania",
      "date": "2016-03-09T00:09:36.826-0500",
      "body": "Pull request : <https://github.com/fluid-project/infusion/pull/684>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-08T12:32:00.074-0500",
      "body": "These seems to happen if you remove files as well.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/>

2\) Add several files to the queue and start the upload

3\) While pause the upload and add some more files

4\) Restart the upload.\
Notice that while the upload is happening the uploaded size goes higher than the total size. After the queue has finished the uploaded and total size are the same again.

        