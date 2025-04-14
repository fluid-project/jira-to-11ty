---json
{
  "title": "FLUID-3697",
  "summary": "Undo hard-codes selector classes instead of using user-configured values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2010-08-30T15:34:48.829-0400",
  "updated": "2021-07-29T01:45:58.708-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Undo"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Undo decorator generates markup that hard-codes selector class names into the HTML, despite the fact that the selectors are specified in the defaults, and a can be overridden by the implementer. If the implementer does override them, the showing/hiding of the controls will fail, because it will try to show/hide elements with the customized selectors, while the generated markup has the defaults.

        