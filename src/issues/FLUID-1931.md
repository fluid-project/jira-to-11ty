---json
{
  "title": "FLUID-1931",
  "summary": "OSDPL: Put form validation back into Tabbed CCK form.",
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
  "date": "2008-12-05T13:49:53.000-0500",
  "updated": "2009-01-20T14:14:08.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1931/osdpl_form_validation_v1.txt",
      "filename": "osdpl_form_validation_v1.txt"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-12-15T10:31:10.000-0500",
      "body": "iteration24\n"
    }
  ]
}
---
Accidentally deleted the form validation code for the tabbed CCK form.

Put this back in using the CCK Validate field.

        