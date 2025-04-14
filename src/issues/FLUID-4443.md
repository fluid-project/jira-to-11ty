---json
{
  "title": "FLUID-4443",
  "summary": "\"Add more\" button disabled after file upload failure",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "heidi valles",
  "date": "2011-09-12T16:33:25.806-0400",
  "updated": "2014-03-03T13:03:33.048-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "FF6, Mac 10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2011-09-12T16:41:05.806-0400",
      "body": "If acceptable, non-failing files are in the mix, the \"Add more\" button is appropriately enabled.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-09-23T17:33:19.772-0400",
      "body": "Antranig has offered to write unit tests for Mike's fix to this issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-28T11:47:22.939-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/173> merged into project repo at 896ff93122142aceb9f097c888c5d9fa6f885be6\n"
    }
  ]
}
---
<http://build.fluidproject.org/uploader/hourly/image-gallery.php>

Upload a pdf - it will fail. But the "Add more" button remains disabled.

        