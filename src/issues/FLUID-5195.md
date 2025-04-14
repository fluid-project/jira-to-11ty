---json
{
  "title": "FLUID-5195",
  "summary": "Repeated controls in composite Starter panel could share templates",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-28T15:45:47.510-0400",
  "updated": "2021-06-22T13:04:07.711-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-22T13:04:07.707-0400",
      "body": "There are no longer any composite panels in any of the adjuster panels. Composite panels are still supported and provided in the examples though.\n"
    }
  ]
}
---
The composite panel in the starter preferences displays two checkboxes. The individual HTML templates for the two controls are identical except for the selector names. The code supports using a single template for both controls; I think it would make sense to update our starter panels to use a shared template.

        