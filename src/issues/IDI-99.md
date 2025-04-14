---json
{
  "title": "IDI-99",
  "summary": "Add 'book equipment' functionality",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2012-08-20T16:32:19.109-0400",
  "updated": "2020-02-15T04:04:44.839-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IDI site"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/IDI-35/",
      "key": "IDI-35"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-08-22T12:53:41.256-0400",
      "body": "A first draft of this has been merged into the idi-theme repo (development branch) at d56b5049bdf6e0e2747088cf6af64f573558b120 with a small change to the base wordpress-fss-theme at 070ddff81c6e25b3e0e3e654d01263dea4d4516e. There's still work to be done, but this merge should make it easier for people to review the work so far.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-01-15T15:03:19.100-0500",
      "body": "The dev branch at b22eb872d59aa750a554e84ea23b80513c3566da now contains a more up-to-date version of this work, with access to the form for only logged-in users.\n"
    }
  ]
}
---
The first pass at equipment booking will be a downloadable form, accessible through the "infrastructure" page (which will be renamed to "booking")

        