---json
{
  "title": "FLUID-2593",
  "summary": "Uploader: inconsistent selector name in Infusion 1.0 \"flc-uploader-scroller-footer\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-13T17:25:30.000-0400",
  "updated": "2009-05-20T14:47:37.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-20T14:47:37.000-0400",
      "body": "was fixed at r7112\n"
    }
  ]
}
---
When renaming selectors, I allowed "flc-uploader-scroller-footer" to slip through. The intended name of this selector was to be: "flc-uploader-queue-footer"

        