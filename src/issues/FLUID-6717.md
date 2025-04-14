---json
{
  "title": "FLUID-6717",
  "summary": "Minimal preferences framework example should be localised",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-02-07T08:37:18.509-0500",
  "updated": "2022-02-07T08:37:18.509-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The minimal preferences framework example at <https://github.com/fluid-project/infusion/tree/main/examples/framework/preferences/minimalEditor> does not render a localisable panel from a message bundle. This was hacked to load an empty message bundle for the 4.0 release - in future it should be rewritten to demonstrate a properly localisable panel since this will be the only option in future releases of the prefs framework.

        