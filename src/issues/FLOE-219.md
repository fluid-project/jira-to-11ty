---json
{
  "title": "FLOE-219",
  "summary": "Some unit tests fail in Safari",
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
  "date": "2014-08-14T12:39:28.641-0400",
  "updated": "2014-08-19T10:27:12.550-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool",
    "Metadata"
  ],
  "environment": "Safari only.\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-08-15T15:49:40.520-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/metadata/pull/36>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-08-19T10:27:08.918-0400",
      "body": "Merged @ f7b35f03f561d052ae8227237b6a177e86f1fde0\n"
    }
  ]
}
---
These unit tests for the metadata and feedback tools fail in Safari:

tests/components/metadata/html/captionsPanel-Test.html\
tests/components/metadata/html/resourceInputPanel-Test.html\
tests/components/metadata/html/transcriptsPanel-Test.html

The unit test for testing the individual panels shows: "Expected 24 assertions, but 22 were run"

        