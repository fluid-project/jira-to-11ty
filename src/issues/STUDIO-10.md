---json
{
  "title": "STUDIO-10",
  "summary": "\"Tag\" pages don't show all posts with the tag",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-08T08:46:27.481-0500",
  "updated": "2011-12-09T13:15:23.443-0500",
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
      "author": "Michelle D'Souza",
      "date": "2011-12-09T10:50:59.097-0500",
      "body": "Merged into project repo at revision 94a0d132ce10da3836ce185f2c0b677fc12bd579\n"
    }
  ]
}
---
When more than one post has been assigned a certain tag, the summary page for that tag does not show all the posts: it only shows one, with an "Older posts" link. Clicking on the "Older posts" link gives a 404.

I believe the tag page should list all of the posts with that tag.

        