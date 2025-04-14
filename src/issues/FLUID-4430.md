---json
{
  "title": "FLUID-4430",
  "summary": "Broken UI Enhancer Unit Test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-09-07T12:12:33.161-0400",
  "updated": "2011-09-07T12:57:42.538-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "XP - all browsers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-07T12:57:42.536-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/158> merged into project repo at 576013024be0bf0653e35b05851be3e858d5673a\n"
    }
  ]
}
---
Verdana font isn't properly set in the UI Enhancer, causing the test to break.

        