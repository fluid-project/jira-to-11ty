---json
{
  "title": "STUDIO-11",
  "summary": "Tag summary page still has space between excerpt and tags",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-08T10:22:31.404-0500",
  "updated": "2011-12-09T13:15:54.147-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-12-09T11:12:16.166-0500",
      "body": "I have reviewed and tested Michelle's fix for this issue. Pushed to upstream/development at 17eac7eddc5ae60f9d0735a73f418b49094be565\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-12-09T11:14:40.607-0500",
      "body": "Review, tested, and pushed to development.\n"
    }
  ]
}
---
When you click on a tag, you get a page displaying the entries with that tag. The page should be formatted the same as the front page. It's basically the same, but there is a space between the excerpt text and the tags on the tag page; this space was removed from the front page.

        