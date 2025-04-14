---json
{
  "title": "FLOE-346",
  "summary": "At lowest text size, 'decrease' button not disabled",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-20T11:31:41.679-0400",
  "updated": "2015-11-03T12:40:01.440-0500",
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
      "date": "2015-05-21T15:41:12.951-0400",
      "body": "The pull request (<https://github.com/fluid-project/first-discovery/pull/53>) that fixes this issue has been merged into the master branch @ 62ac9caaf38e051dd276a17efbc5a116c6c0eb0e\n"
    }
  ]
}
---
When the text size +/- buttons are used to reduce the size to the smallest supported size, the 'disabled' attribute is not added to the - button, the way it is added to the + button at the maximum size. This means there is no disabled styling applied.

        