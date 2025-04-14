---json
{
  "title": "FLOE-406",
  "summary": "Need to rename displayLangIndex to something that is more accurate",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-08-10T13:29:10.243-0400",
  "updated": "2015-11-03T12:54:46.009-0500",
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
      "date": "2015-08-31T13:05:24.885-0400",
      "body": "The decision is to rename displayLangIndex to viewportFirstLangIndex.\n\nIssued a pull request: <https://github.com/fluid-project/first-discovery/pull/96>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-08-31T13:25:09.605-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/96> ) into the project repo at e11e7ffdaef107e487e8c57962fd8b626fe25cd9\n"
    }
  ]
}
---
The "displayLangIndex" model property contains the index of the top language to display on the panel. This should be changed to a name that is more meaningful and accurately describes what it is for.

        