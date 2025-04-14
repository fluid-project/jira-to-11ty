---json
{
  "title": "FLUID-6067",
  "summary": "Uploader \"shading behind the totals\" does not display progress of total queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Alan Harnum",
  "date": "2016-11-14T15:52:38.295-0500",
  "updated": "2021-07-06T15:58:27.013-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4438/",
      "key": "FLUID-4438",
      "summary": "Uploader no longer shows progress on its status/totals bar"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The test cases at <https://wiki.fluidproject.org/display/fluid/Uploader+QA+Test+Plan> say the following is expected state when uploading files:

"While a file is uploading, the shading behind the totals should display the current progress of the total queue."

This does not currently occur visually, although if the markup for the progress bar is examined in development tools while the uploading occurs, you can see the block width and attributes changing as you'd expect to show progress - so this may be a styling issue making the progress bar invisible or hidden.

        