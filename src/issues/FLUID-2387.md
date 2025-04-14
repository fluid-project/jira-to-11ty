---json
{
  "title": "FLUID-2387",
  "summary": "OSDPL: implement the pattern review workflow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-03-20T11:42:06.000-0400",
  "updated": "2013-04-11T17:45:51.963-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-03-20T11:42:15.000-0400",
      "body": "iteration30\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-20T13:48:45.480-0500",
      "body": "Mostly implemented using the workflow module.\n"
    }
  ]
}
---
Implement the pattern review process workflow.

* activate the Workflow-NG rules for the uidp content type
* add the pattern review form fields to the uidp CCK form
* ensure that pattern review field only visible to Pattern Editors or higher
* modify the interface so it is easy to review patterns (vague usability task).

        