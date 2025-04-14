---json
{
  "title": "FLUID-5095",
  "summary": "UIOptions model relay has a typo in fluid.uiOptions.modelRelay.removeListeners.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-07-18T15:43:14.584-0400",
  "updated": "2013-07-19T10:45:11.740-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-07-19T10:45:08.208-0400",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-5059#icft=FLUID-5059>\n"
    }
  ]
}
---
fluid.uiOptions.modelRelay.removeListeners has a line that says:

applier.removeListener(namespace);

where it should actually be:

applier.modelChanged.removeListener(namespace);

        