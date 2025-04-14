---json
{
  "title": "FLOE-326",
  "summary": "Add tooltips to the contrast panel",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-05-07T11:51:10.452-0400",
  "updated": "2015-11-03T12:06:24.258-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-315/",
      "key": "FLOE-315",
      "summary": "Add a contrast enactor to the FD tool"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-328/",
      "key": "FLOE-328",
      "summary": "Improve gpii.firstDiscovery.attachTooltip to re-calculate the tooltip model at model change instead of afterRender"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-326/FD tool contrast tool tips.pdf",
      "filename": "FD tool contrast tool tips.pdf"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-11T09:16:46.450-0400",
      "body": "Work has started <https://github.com/jobara/first-discovery/tree/FLOE-326> but requires the changes from <https://fluidproject.atlassian.net/browse/FLOE-328#icft=FLOE-328> to have all the unit tests pass.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-12T09:21:29.465-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLOE-326#icft=FLOE-326> will no longer be implemented, will fix the tooltips as they are.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-12T09:21:37.965-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/first-discovery/pull/43>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-12T09:54:42.275-0400",
      "body": "Merged the pull request into the master branch @ 6e81b6dceb188ce28a6704a9d97f22a49755ccb2\n"
    }
  ]
}
---
The "radio" buttons for the contrast tool should have tooltips.

        