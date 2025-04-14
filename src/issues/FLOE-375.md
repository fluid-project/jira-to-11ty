---json
{
  "title": "FLOE-375",
  "summary": "The tooltip for \"try it\" button no longer shows up",
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
  "date": "2015-06-03T16:21:21.261-0400",
  "updated": "2015-11-03T12:48:22.463-0500",
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
      "author": "Justin Obara",
      "date": "2015-06-04T12:07:44.524-0400",
      "body": "merged pull request ( <https://github.com/fluid-project/first-discovery/pull/86> ) into the project repo at 831806bb3717c37d2d3a02e4db240dc42c5096be\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-04T14:47:54.087-0400",
      "body": "The merge of the pull request causes Panels-Tests.html broken.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-04T15:00:35.982-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/89> ) into the project repo at 34f599d74f9c789ee0fceeb054ed4e5f629aa23c\n"
    }
  ]
}
---
On the sticky keys panel, input a non-% character, hover over "try it" button, the tooltip doesn't show up.

This is probably related to the fix we put in for <https://issues.fluidproject.org/browse/FLOE-361>

        