---json
{
  "title": "DECA-79",
  "summary": "Modify Decapod image capturing workflow",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Boyan Sheytanov",
  "reporter": "Boyan Sheytanov",
  "date": "2010-03-11T09:29:08.000-0500",
  "updated": "2012-01-10T09:45:41.387-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T10:06:36.000-0400",
      "body": "Mostly complete. Incomplete issues captured in other issues in Jira.\n"
    }
  ]
}
---
According to the Decapod 0.3 Design wireframes (<http://wiki.fluidproject.org/display/fluid/Decapod+0.3+Design>), there are some changes needed in the workflow related to image capturing:

1\. Before first capture cameras should be detected. If less than 2 supported cameras are detected, the Detect Camera dialog should be displayed.\
2\. After first capture, Page order dialog should be displayed.\
3\. After each capture, post-processing should be run in the background (currently crop & stitch).

        