---json
{
  "title": "FLUID-4438",
  "summary": "Uploader no longer shows progress on its status/totals bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2011-09-12T12:39:23.558-0400",
  "updated": "2021-07-06T15:58:19.240-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6067/",
      "key": "FLUID-6067"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T14:25:06.475-0400",
      "body": "@@Dana, @@Jonathan Hung, and @@Colin Clark should the uploader show a progress indicator for the total progress, or is progress message enough?\n"
    },
    {
      "author": "Dana",
      "date": "2015-06-10T11:23:29.506-0400",
      "body": "@@Justin Obara by overall progress you're referring to the \"2 out of 3 files uploaded\"? I think this works well - we also have the green check and red x to show which files have been uploaded and which haven't. And progress indication while uploading each individual file is still there. Looks good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T09:01:34.795-0400",
      "body": "@@Dana actually the bar with the \"2 out of 3 files uploaded\" used to display a progress meter like the individual progress bars for each file upload. However, seeing as you have pointed out the wealth of progress information passed back, this extra bit may be unnecessary. I'll let you have the final say on that though.\n"
    }
  ]
}
---
Uploader used to show overall progress with a progress bar on its status bar. It's no longer there, but still in the QA Test plans.

        