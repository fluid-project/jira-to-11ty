---json
{
  "title": "FLOE-466",
  "summary": "Update to the latest versions of key dependencies",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2016-06-23T17:44:34.599-0400",
  "updated": "2016-09-13T13:01:55.021-0400",
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
At the moment, the Chart Authoring Tool's dependencies are a bit stale. We should make sure we're running the latest versions of, at least:

* Infusion
* Flocking
* Grunt
* QUnit/jqUnit

        