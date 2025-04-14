---json
{
  "title": "FLUID-255",
  "summary": "Determine if there are new Dev Tasks for uPortal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Shaw-Han Liem",
  "date": "2008-02-19T12:48:33.000-0500",
  "updated": "2014-03-04T09:07:41.481-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UX: Component Design"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Shaw-Han Liem",
      "date": "2008-03-05T14:47:33.000-0500",
      "body": "Gary and I looked at the current mockups in detail and determined that we can make these changes in CSS (i.e. without adding any new development tasks)\n"
    }
  ]
}
---
There are some differences between the interation mockup for portal Reordering and the current test file on Build. Some of these are CSS issues, but there may be some that require dev team time. We should identify the dev issues and create JIRA tickets for them if they don't exist.

Specifically:

* When the drop target appears (right now only works when the mouse cursor is over another portlet)
* Appearance of original portlet while dragging (currently unchanged, but the mockup is an empty box with a dotted line)

iteration03

        