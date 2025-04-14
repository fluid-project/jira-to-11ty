---json
{
  "title": "ENGAGE-135",
  "summary": "Use the renderer fluid decorator to init multiple subcomponents",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-20T15:36:12.000-0400",
  "updated": "2010-02-05T14:15:36.000-0500",
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
      "date": "2010-02-05T14:15:36.000-0500",
      "body": "The browse component has undergone some refactoring and renders out subcomponents where appropriate\n"
    }
  ]
}
---
Use the renderer fluid decorator to init multiple subcomponents

Currently the browse component renders out a series of templates later have a navigationList rendered onto of them. This should all be done in one step by using the Renderer's fluid decorator.

This was the original implementation, but had to be changed to the work around due to a bug in the renderer. This issue has now been addressed.

        