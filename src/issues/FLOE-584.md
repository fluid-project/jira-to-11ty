---json
{
  "title": "FLOE-584",
  "summary": "Update the chart authoring tool to the latest release of Infusion, Flocking, and other third party dependencies",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Philip Tchernavskij",
  "reporter": "Colin Clark",
  "date": "2020-03-24T17:06:52.587-0400",
  "updated": "2020-10-22T08:14:58.084-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently, the Chart Authoring Tool does not build because it depends on an old version of Flocking. It also uses an old version of Infusion, and its code will need to be updated to conform with modern versions of the framework. Other third party dependencies are looking a little long in the tooth, and should be updated while we're at it.

        