---json
{
  "title": "FLUID-4530",
  "summary": "Add a new option for renderer component to inject a jQuery instance",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-10-27T16:21:59.855-0400",
  "updated": "2015-06-10T11:00:01.089-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The UI Options fat panel simplification removes the infusion library from the iFrame where the UIO interface is rendered, instead uses the infusion residing at the main page. For the DOM binding and manipulation on the iFrame, rendererComponent needs to provide a new option where a different jQuery instance that originates from iFrame can be injected.

        