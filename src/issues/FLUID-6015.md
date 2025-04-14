---json
{
  "title": "FLUID-6015",
  "summary": "Improve the way docs sites work for mobile",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2016-10-30T20:40:47.040-0400",
  "updated": "2024-08-01T07:59:13.890-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-08-01T07:59:07.293-0400",
      "body": "This appears to be related to the old Docs Platform.&#x20;\n"
    }
  ]
}
---
Improve the way the docs sites perform on mobile. Specifically:

1\. The top navigation should not be a hamburger button on mobile, rather it should be stacked navigation links.

2\. On mobile, the sidebar content should behave like a menu. A hamburger menu should reveal the menu of topics. Once a selection is made, the menu closes and the chosen page is loaded. On desktop, it should be a permanent sidebar.

        