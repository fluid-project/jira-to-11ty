---json
{
  "title": "FLUID-4017",
  "summary": "Total file progress information is inaccurate when uploading files with the HTML 5 version of Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-12-22T17:32:11.428-0500",
  "updated": "2011-02-07T11:25:23.579-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Firefox 4, Safari 5, and Chrome\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3988/",
      "key": "FLUID-3988"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4017/FLUID-4017.patch",
      "filename": "FLUID-4017.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4017/FLUID-4017-b.patch",
      "filename": "FLUID-4017-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4017/renameRemoteStart.patch",
      "filename": "renameRemoteStart.patch"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-27T10:58:48.080-0500",
      "body": "Fixed the HTML5 so that files are uploaded synchronously.  The uploader events were initially chained for synchronous uploading, however, we introduced asynchronous uploading when the HTML5 multi-file uploader was created.  We just needed to remove our loop to iterate through all the files to upload and we were back in business.  We may want to re-introduce this feature once all A-grade browsers support HTML5 multi-file uploading. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-27T11:03:04.227-0500",
      "body": "This patch also fixes <https://fluidproject.atlassian.net/browse/FLUID-4018#icft=FLUID-4018>.  There is now a natural break between files being uploaded due to synchronous uploading which allows the stop button to do it's work. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-27T11:03:30.732-0500",
      "body": "Awaiting code review and commit\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-27T19:25:50.584-0500",
      "body": "Hey Mike,\n\nI think you've got it pretty much solved with your patch. One simplification: the FileQueue's current batch object contains a property called fileIdx, which gets incremented each time FileQueue.startFile() gets called. I'm assuming that this is probably the same value as the that.fileToUpload property you are storing in the Uploader's HTML5 remote strategy. Maybe use it instead?\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-28T12:25:29.032-0500",
      "body": "Use the current batch's fileIdx value instead of attaching another counting variable to the model.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-28T13:22:45.971-0500",
      "body": "Rename the remote start() function to uploadNextFile() to be more descriptive of its actual purpose.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-07T11:24:58.557-0500",
      "body": "I pushed Mike's main patch to the project repo at revision 243968bbb34175706916 and a modified version of his renaming patch at revision c865c45c503c43df7141. Fixed for 1.3.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-07T11:25:23.571-0500",
      "body": "Fixed for 1.3.1\n"
    }
  ]
}
---
The Uploader currently shows inaccurate or inconsistent information in the total file progress area to the left of the "Add More" button. This is due to the fact that uploads occur concurrently, while there are a number of Flash-era assumptions in the code that files will always be uploaded in a one-by-one manner.

This should be fixed by either ensuring that uploads occur synchronously, or preferably by rewriting the state management code to handle asynchronous, concurrent file uploads.

        