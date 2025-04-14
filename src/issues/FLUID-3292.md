---json
{
  "title": "FLUID-3292",
  "summary": "progress indicator demo can create multiple progress indicators",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Laurel Williams",
  "date": "2009-10-14T11:58:18.000-0400",
  "updated": "2010-10-12T09:58:21.924-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T09:58:21.922-0400",
      "body": "Submit button now disables when activated.\n"
    }
  ]
}
---
The progress indicator demo can be triggered by the "do something" button multiple times. Each progress indicator is overlayed, so you can't really see them, but they re-display once the previous indicator has reached 100%. Maybe we need to disable the button after activation?

        