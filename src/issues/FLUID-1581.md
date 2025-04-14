---json
{
  "title": "FLUID-1581",
  "summary": "Uploader2: Progress and Scroller have same selector: \"wrapper\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2008-09-17T15:50:20.000-0400",
  "updated": "2008-09-30T11:10:03.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-09-17T16:43:40.000-0400",
      "body": "Fixed in the Progress component by removing the wrapper selector since the displayElement is the same\n"
    }
  ]
}
---
The Progress and Scroller objects both use the same selector name: "wrapper". These will collide, as currently options (including selectors) are merged.&#x20;

        