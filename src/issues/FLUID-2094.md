---json
{
  "title": "FLUID-2094",
  "summary": "[OSDPL] Improve usability of Multi-select fields (specifically \"Contributors\" field)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-08T11:26:46.000-0500",
  "updated": "2014-04-02T16:35:53.394-0400",
  "versions": [
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Multi-select fields such as contributor can be confusing in terms of being able to make sure all the proper contributors are selected. Since Contributors also use user names instead of real names, convert the field to display the user full name, both in the form, and in the pattern display. (We need to keep it tied to the user ID so that we can give contributors special rights at some point.)

        