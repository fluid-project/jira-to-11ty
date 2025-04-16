---json
{
  "title": "SJRK-416",
  "summary": "Make server endpoints more RESTful",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-26T16:23:58.281-0400",
  "updated": "2022-07-29T00:09:25.773-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-09T09:27:52.033-0500",
      "body": "We should review all of the end points ensure that they follow proper RESTful semantics\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-18T07:45:23.054-0500",
      "body": "This [Google Sheet](https://docs.google.com/spreadsheets/d/1nmvJcDLj4YXgprqDN117MiyJrhSEb4Qh3vTxeSoxLIQ/edit?usp=sharing) provides a summary of the current endpoints. \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-12-14T14:38:03.857-0500",
      "body": "Consider doing this work and <https://fluidproject.atlassian.net/browse/SJRK-441#icft=SJRK-441> at the same time\n"
    }
  ]
}
---
In response to [this piece of review](https://github.com/fluid-project/sjrk-story-telling/pull/77#pullrequestreview-502402490) left by Justin Obara on the pull request for <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289>, the server endpoints for getting, saving and editing stories should be adjusted to be more [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) and internally consistent with respect to the routes for stories and files. This work will also require updating the client side to call the correct endpoints.

Justin Obara's original comments from October 5, 2020:

> Should review the end points for proper RESTful semantics. In this case POST to create a story makes sense. However uploading a file would likely be better to POST to /stories/:id/files. Updating specific files, or stories can use PUT and deleting a file or story can use DELETE.

        