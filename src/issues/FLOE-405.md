---json
{
  "title": "FLOE-405",
  "summary": "Source D3 and Flocking via package management rather than including directly",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Cindy Li",
  "date": "2015-08-07T14:41:47.486-0400",
  "updated": "2016-09-13T13:01:53.939-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-02-10T16:14:04.726-0500",
      "body": "Bumping this issue and assigning it to myself. Also retitling from a specific mention of Bower, which may not be in the mix as opposed to straight NPM.\n\nGetting this to \"production\" will require changes to how build.fluidproject.org/chartAuthoring is deployed as well - currently the build process assumes it can simply clone the repo to a subdirectory and serve it as a static site. Will create a separate issue for that once this change is in the repo.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-03-16T10:56:11.056-0400",
      "body": "PR: <https://github.com/fluid-project/chartAuthoring/pull/14>\n"
    }
  ]
}
---
Bower is a project management tool (<http://bower.io/>) that can be used to import d3 library and other external libraries used in the chart authoring tool.

        