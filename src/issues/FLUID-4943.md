---json
{
  "title": "FLUID-4943",
  "summary": "There is no focus styling for Table of Contents toggle in UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-03-25T14:13:03.918-0400",
  "updated": "2013-09-06T13:38:34.116-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Using the toggle slider for Table of Contents, there is no focus styling when keyboard focused.

Investigate whether focus styling can be applied to the label (which the toggle resides) or consider using javascript to apply a focus style.

        