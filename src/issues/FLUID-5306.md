---json
{
  "title": "FLUID-5306",
  "summary": "No tests for fluid.uploader.fileQueueView.removeFileErrorRow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2014-04-09T08:53:31.999-0400",
  "updated": "2014-04-09T08:53:58.046-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In working on FLUID-5284 an error in this function was found. Basically it called functions that didn't exist as they were missing the appropriate namespace. This has been corrected in work for FLUID-5284; however, there should have been unit tests to catch this failure.&#x20;

        