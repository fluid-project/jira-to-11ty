---json
{
  "title": "FLUID-4620",
  "summary": "Infusion Module is missing $.trim method in jquery standalone.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2012-02-27T13:46:13.152-0500",
  "updated": "2014-03-03T13:00:32.619-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Node.js\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2012-02-27T14:14:09.672-0500",
      "body": "Fixed and merged with master (rev: a2ea542e40ce5bd8c3f4d02d466b717781ba81ae)\n"
    }
  ]
}
---
Infusion Module is missing $.trim method in jquery standalone.\
In case when the user of the module wants to use JavaProperties.js we are missing $.trim method.

        