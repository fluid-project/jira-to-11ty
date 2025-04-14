---json
{
  "title": "FLUID-2291",
  "summary": "OSDPL: Site activity Grid View not displaying most recent log entry",
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
  "date": "2009-02-24T09:45:26.000-0500",
  "updated": "2014-04-02T16:35:54.048-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the "Pattern Activity Thumbnail Grid" View, the most recent Workflow-NG log entry is not being displayed in some instances. This occurs when: using Node:Distinct filter, and an item has multiple log entries.

If this can't easily be fixed by a custom query, then an interim solution would be to split activity into categorized View blocks and display those in the front page. Or investigate a new interface that displays the activity log onto the main page.

        