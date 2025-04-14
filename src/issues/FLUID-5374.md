---json
{
  "title": "FLUID-5374",
  "summary": "Position of overview panel's content top coordinate does not match the height of its title",
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
  "reporter": "Jonathan Hung",
  "date": "2014-05-16T11:29:54.675-0400",
  "updated": "2024-07-22T10:35:31.472-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-05-16T11:45:50.242-0400",
      "body": "The metadata component demo currently has a temporary fix for this issue. When this fix gets merged into master, the fix in metadata should be removed.\n"
    }
  ]
}
---
In the OverviewPanel, the top value of .fl-overviewPanel-contents should be 5.5em, not 6.5em. This causes a gap to appear between the title and the instructions when using certain font sizes.

.fl-overviewPanel .fl-overviewPanel-contents {\
top: 6.5em; <--- should be 5.5em\
}

        