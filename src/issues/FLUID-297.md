---json
{
  "title": "FLUID-297",
  "summary": "Add focus and blur listeners to each selectable element.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-02-21T20:49:55.000-0500",
  "updated": "2011-02-22T16:27:50.913-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-02-22T14:37:21.000-0500",
      "body": "Reworked the plugin's focus management so that focus and blur control the selection/unselection process.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:50.912-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The keyboard-a11y plugin needs to be able to support the ability to programmatically set focus from outside the plugin. So, for example, if another script or an AT called focus () on a selectable element, the plugin should know to update its state and trigger the selection process accordingly.

        