---json
{
  "title": "FLUID-2853",
  "summary": "Uploader renames files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-29T15:34:33.000-0400",
  "updated": "2009-11-09T09:22:42.000-0500",
  "versions": [
    "1.1",
    "1.1.1"
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
      "date": "2009-11-06T14:41:26.000-0500",
      "body": "was not able to reproduce this issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-11-06T14:51:52.000-0500",
      "body": "Steps to reproduce:\n\n1\\) On your hard-drive, find a JPEG image to test with.\\\n2\\) Rename the file so that it has no file extension at all.\\\n3\\) Add it to the Uploader queue\n\nNote that the filename in the queue now includes a \".jpg\" extension.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-11-07T13:04:41.000-0500",
      "body": "Hi Anastasia,\n\nI also can't reproduce this issue. Are you sure you're correctly removing the file extension from the file? In Mac OS X, if you edit the file name directly in the Finder and remove the file extension, it doesn't actually remove it. It just enables Finder's \"Hide extension\" option for the file.\n\nTo fully remove a file extension on the Mac, choose Get Info, remove it the name, and you'll get a confirmation dialog asking if you really want to remove the file extension. When I do this, Uploader reflects the correct file name, sans extension.\n\nCan you double-check this and close the issue if you can't reproduce as well? After that, if you're still feeling indignant, maybe send a note to Steve Jobs? 😛\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-11-09T09:22:42.000-0500",
      "body": "I had no idea that the Finder doesn't actually do what I tell it to do. I hate it when that happens...\n"
    }
  ]
}
---
If you add a file to the file queue that doesn't have an extension that matches its file type, the Uploader adds an appropriate extension.

I'm not sure if this is a bug, and I'm sure some people wouldn't have a problem with it, but my first reaction was an indignant "Who are you to be renaming my files??" Is it appropriate for the Uploader to be doing this?

        