---json
{
  "title": "SJRK-209",
  "summary": "The View page is blank when accessing a non-existent or deleted story",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-29T17:21:28.575-0500",
  "updated": "2020-11-26T13:15:02.614-0500",
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
      "author": "Cindy Li",
      "date": "2020-11-26T13:15:02.611-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/103) that fixes this issue has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/42fa0b869fe14f3e97111f95d6d80f0073dc26c7).\n"
    }
  ]
}
---
The View page will be effectively blank when attempting to access a story that does not exist or no longer exists. E.g. <https://stories.floeproject.org/storyView.html?id=whatever>

Here's a sample of the return from the server in that case:

"message":"not\_found while executing HTTP GET on url <http://localhost:5984/stories/%storyId>","isError":true,"statusCode":404}

It would be more helpful to display a general 404 page that has links back to the browse and/or story builder pages

        