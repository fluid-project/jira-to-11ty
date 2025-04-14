---json
{
  "title": "FLUID-3116",
  "summary": "code refactor in customBuild - checkAll and unCheckAll",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-08-20T11:01:46.000-0400",
  "updated": "2009-08-24T10:43:44.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "all\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
customBuild.js the code for checkElementArray and unCheckElementArray seem to be very similar. You could probably abstract that out into a general function that is called with different parameters

        