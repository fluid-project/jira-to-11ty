---json
{
  "title": "FLUID-2154",
  "summary": "Remove 'No Preference' from UI Options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-01-21T13:36:00.000-0500",
  "updated": "2011-02-22T16:28:01.727-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:01.726-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
No Preference does not really work in the interface. It's confusing and doesn't give much information. Instead, integrators would specify what the defaults are. When UI Options first opens, the integrator's defaults will show up as selected and the integrator's styling will show in the preview. Selecting another option will change the preview appropriately. Resetting or selecting the integrator's default will change the preview back to the original state.

        