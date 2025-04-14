---json
{
  "title": "FLOE-404",
  "summary": "Create an Infusion wrapper component for the parts of D3 library that we need for the pie chart",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Cindy Li",
  "date": "2015-07-30T15:32:34.364-0400",
  "updated": "2015-10-07T09:54:24.815-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-403/",
      "key": "FLOE-403"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-25T15:27:37.175-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/chartAuthoring/pull/6> ) into the project repo at 71408f7b48ca0cd70fad37a994dfaf3d95cb2e80\n"
    }
  ]
}
---
After the discussion with Antranig and Colin, the features that the wrapper component should have for the first cut:

1\. Be able to accept the input data set and pie chart options to create a pie chart

2\. Be able to register DOM listeners (click or hover) on D3 life cycle events like infusion "onCreate" and "afterRender"

3\. Do not need to wrap up d3 enter() and exit() so users are free to use D3 renderer

        