---json
{
  "title": "FLOE-273",
  "summary": "Start the first discovery tool on the first page",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-02-13T11:05:59.734-0500",
  "updated": "2015-11-03T11:24:51.446-0500",
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
      "date": "2015-02-13T13:12:18.053-0500",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/22>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-02-13T13:59:17.598-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/22> ) into the project repo at 1723114d47a7a9a7ffcdba4d31ffa5e7b4151175\n"
    }
  ]
}
---
Right now, the page load on the first discovery tool starts on the 3rd text size panel that is the only functional panel for now. What needs to be changed:

1\. Start the demo on the first panel;\
2\. Instead of showing a blank page for the first panel, add some text on to it;\
3\. Switch the text size panel to the 2nd prefs.

        