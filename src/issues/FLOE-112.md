---json
{
  "title": "FLOE-112",
  "summary": "Create a simple editor",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2013-11-29T12:33:20.465-0500",
  "updated": "2013-12-16T12:30:10.423-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-29T13:25:26.223-0500",
      "body": "An example of how to implement using contentEditable and execCommand\\\n<http://www.barneyparker.com/world-simplest-html5-wysisyg-inline-editor/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-10T09:14:05.125-0500",
      "body": "The first part has been merged into the project repo. I've made further updates to add insertion of a video. Currently this just tracks the URL and adds a placeholder to the editor.\\\n<https://github.com/jobara/metadata/tree/FLOE-112>\n\nI'm passing off the branch to jhung for some additional styling work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-16T12:30:10.420-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/metadata/pull/6> ) into the project repo at 2cabbdafcb495c02efbcdeb27e5646262245d73e\n"
    }
  ]
}
---
Implement a simple editor using contentEditable to be used by the metadata demo. The editor can be fairly basic, supporting only bold, italicize, underline, and adding media.

        