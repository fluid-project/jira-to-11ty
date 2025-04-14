---json
{
  "title": "FLUID-5991",
  "summary": "RTE Inline Edit demo - ARIA log is visible at bottom of page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Alan Harnum",
  "date": "2016-10-26T12:12:29.531-0400",
  "updated": "2024-07-23T13:01:12.739-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:01:12.556-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
A log of ARIA messages (analogues to the tooltips) is visible at the bottom of the demo page at \
<http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/rich/>

Log items have the class *ui-helper-hidden-accessible* but this class does not appear to have any style definitions.

        