---json
{
  "title": "FLOE-345",
  "summary": "Implement the on-screen keyboard panel",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-05-20T10:56:25.824-0400",
  "updated": "2015-11-03T12:39:38.722-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-05-25T09:07:12.390-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/58>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-25T10:17:22.182-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/58> ) into the project repo at 0475f1805d3b4ecb8f421ea499260350a2c125ae\n"
    }
  ]
}
---
This is a yes-no-selection panel that can re-use the code for the speak text panel so the first thing to do is to refactor the speak text panel to create a generic component that can be reused by all yes-no-selection panels.

        