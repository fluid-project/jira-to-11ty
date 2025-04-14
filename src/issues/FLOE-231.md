---json
{
  "title": "FLOE-231",
  "summary": "Save data when the match or mismatch buttons are clicked to deactivate themselves.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2014-09-03T13:56:51.800-0400",
  "updated": "2014-09-04T16:16:01.405-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-09-03T14:01:15.911-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/metadata/pull/40>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-09-04T16:15:59.216-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/metadata/pull/40> ) at 4c3342b5644fd383bf4ff191131c40094f97f66c\n"
    }
  ]
}
---
When clicking the match or mismatch buttons to deactivate themselves, the deactivated data is not saved into the database.&#x20;

The deactivated data is only saved when clicking the other button to deactivate the self, for example, clicking match mismatch to deactivate the match, and vice versa.

        