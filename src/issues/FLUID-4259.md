---json
{
  "title": "FLUID-4259",
  "summary": "Renderer component should support \"renderOnInit\" configuration flag, removing the need for a manual \"refreshView\" on startup if required",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-05-19T03:03:21.425-0400",
  "updated": "2011-05-19T10:04:02.597-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-05-19T04:00:09.677-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-19T10:04:02.595-0400",
      "body": "Reviewed, tested, pushed to repo at a1a9981e8ee9cffd781ebf5de1afa8a8f05cec9f\n\nHere's a link to the pull request for reference. <https://github.com/fluid-project/infusion/pull/50>\n"
    }
  ]
}
---
This flag is already being used "unofficially" in CSpace and would remove the need for some more code there (as similarly did the introduction of "onRenderTree"/"afterRender" events.

        