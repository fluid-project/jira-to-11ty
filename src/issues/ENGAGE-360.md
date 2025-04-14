---json
{
  "title": "ENGAGE-360",
  "summary": "The Catalogue Browse page needs have a list/grid toggle added to it.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:54:25.000-0500",
  "updated": "2010-02-09T14:24:36.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Catalogue"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:54:40.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-09T14:05:14.000-0500",
      "body": "resolved at r9327\n\nBrowse now displays the toggle button used by the navbar, and wires up the appropriate events for it.\n\nThere is also an option provided to not display the toggle. \"showToggle\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-09T14:24:36.000-0500",
      "body": "I've reviewed Justin's changed at r9327 and the look good. I've asked him to put a comment above one area in his code to clarify why the logic is structured as it is. Otherwise, we're good to go with this fix for Engage 0.3.\n"
    }
  ]
}
---
Catalogue Browse, in the wireframes, is toggleable between list and grid view. In the refactoring of toggling, this was taken out of Catalogue Browse. It needs to be put back in the correct way.

        