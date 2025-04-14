---json
{
  "title": "FLOE-396",
  "summary": "Add automated tests for keyboard functionality on the FD language panel",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2015-06-08T17:01:37.462-0400",
  "updated": "2015-11-03T12:53:48.091-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-333/",
      "key": "FLOE-333",
      "summary": "Scrolling through languages causes page to reload too often"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-08-12T11:58:40.751-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/93>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-08-12T13:13:38.847-0400",
      "body": "Merge pull request ( <https://github.com/fluid-project/first-discovery/pull/93> ) into the project repo at c1e913b78a6b1b6c750773705ab1d512da53bd5f\n"
    }
  ]
}
---
Add automated tests for keyboard functionality on the language panel:

* Test moving selection with the keyboard
* Test activation of language with the keyboard

See <https://github.com/fluid-project/first-discovery/blob/79576554f72687d708489d86ac38898298d4fa3d/tests/js/panelsTests.js#L148-L149>

        