---json
{
  "title": "FLOE-218",
  "summary": "tests/html/pouchDBDataSource-Test.html fails in Chrome",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-08-14T12:31:16.235-0400",
  "updated": "2014-08-14T14:10:21.884-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool",
    "Metadata"
  ],
  "environment": "Only happens in Chrome. Firefox and safari work fine.\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-08-14T13:46:26.218-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/metadata/pull/35>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-08-14T14:10:19.644-0400",
      "body": "Merged into the master branch @ cb6d11d1cdb21c0188388e80721ca5941af3c0cd\n"
    }
  ]
}
---
Running pouchDBDataSource-Test.html in Chrome hangs at the unit test for testing "afterChange event".

        