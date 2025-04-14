---json
{
  "title": "FLUID-3854",
  "summary": "Keyboard focus remains on \"Add more\" button after selecting files to upload in Windows and Mac",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2010-11-18T14:30:49.247-0500",
  "updated": "2010-12-21T16:07:53.576-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-12-21T16:07:44.701-0500",
      "body": "See <https://fluidproject.atlassian.net/browse/FLUID-3890#icft=FLUID-3890>.   This is a duplicate JIRA\n"
    }
  ]
}
---
Keyboard focus remains on the "Add more" button after selecting files to upload in Windows and Mac.   It's working fine in Linux.  &#x20;

To replicate:  \
1\.  Use keyboard navigation only\
2\.  Click on the Browse files button\
3\.  Select files to upload and press enter\
4\.  Both the upload button and add more button have focus.

        