---json
{
  "title": "ENGAGE-186",
  "summary": "NavigationList should support refreshing/rerendering itself",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-11-05T12:57:45.000-0500",
  "updated": "2010-02-01T11:52:03.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/ENGAGE-269/",
      "key": "ENGAGE-269"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-01-26T12:42:53.000-0500",
      "body": "This issue should be resolved in the patch for <https://fluidproject.atlassian.net/browse/ENGAGE-269#icft=ENGAGE-269>. Our new use of fluid.engage.renderUtils.createRendererFunction() also implements a refreshView function, so any changes to the model should be re-renderable simply by calling NavigationList.refreshView()\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-01T11:51:46.000-0500",
      "body": "This was fixed along with <https://fluidproject.atlassian.net/browse/ENGAGE-269#icft=ENGAGE-269> at r9162\n"
    }
  ]
}
---
NavigationList should support refreshing/rerendering itself

This will allow the list of items to be updated/refreshed.

Currently once you have rendered the data, you won't be able to do anything else with it.

        