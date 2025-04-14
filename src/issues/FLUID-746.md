---json
{
  "title": "FLUID-746",
  "summary": "Create a view for tags based on patterns_by_category",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Allison Bloodworth",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-09T22:21:05.000-0400",
  "updated": "2013-04-11T17:31:18.226-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T22:21:25.000-0400",
      "body": "iteration11\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T01:58:36.000-0400",
      "body": "This wasn't working because these items have a URL alias and I was using the alias (category/ui-design-pattern-tags//uportal) rather than the system generated URL (taxonomy/term/12) so it wasn't working. It worked when I changed the URL in the view to the system-generated URL.\n"
    }
  ]
}
---
I started working on this view--it is called patterns\_by\_tag. It should be a table view similar to patterns\_by\_category. Not sure why the argument currently isn't being parsed and thus the view isn't changing from what it normally would be.

        