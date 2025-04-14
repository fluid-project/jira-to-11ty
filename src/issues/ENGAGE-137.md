---json
{
  "title": "ENGAGE-137",
  "summary": "The functionality to show a loading screen and then switch to the actual content should be generalised outside the Browse Component",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-20T15:40:07.000-0400",
  "updated": "2010-02-08T17:36:30.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:15:57.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-08T17:36:30.000-0500",
      "body": "Duplicate of <http://issues.fluidproject.org/browse/ENGAGE-351>\n"
    }
  ]
}
---
The functionality to show a loading screen and then switch to the actual content should be generalised outside the Browse Component

Currently the browse component implements functionality to display a loading page until the content is rendered. This functionality should be generalised out of the component for use by other components that may experience slow load times.

        