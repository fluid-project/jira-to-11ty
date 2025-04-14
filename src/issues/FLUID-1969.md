---json
{
  "title": "FLUID-1969",
  "summary": "OSDPL: Submit, Delete, Preview buttons should appear in a fieldset.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-12-12T13:07:59.000-0500",
  "updated": "2009-01-09T11:46:06.000-0500",
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
      "author": "Jonathan Hung",
      "date": "2008-12-12T13:08:10.000-0500",
      "body": "iteration24\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-09T11:46:01.000-0500",
      "body": "Added instructions to the Submit tab. Should help clarify scope.\n\nRenaming the buttons to say \"Submit Pattern\" or \"Preview Pattern\" doesn't work because Drupal relies on the values of these buttons to be 'Delete', 'Preview', and 'Submit'.\n"
    }
  ]
}
---
The Submit, Delete, and Preview buttons should appear in a fieldset so it is clear as to the scope of each action.

Fix requires going into the template and putting those buttons into a fieldset.

        