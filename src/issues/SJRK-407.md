---json
{
  "title": "SJRK-407",
  "summary": "Create server endpoint to select/load story to edit",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-22T16:13:08.974-0400",
  "updated": "2020-11-18T07:39:35.431-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-410/",
      "key": "SJRK-410"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-17T10:11:57.984-0500",
      "body": "I'm not sure that there is anything that needs to be done for this at the moment. The server already exposes the /stories/:id end point for returning the content of story. This is currently used by storyView.html. I assume we can reuse the same endpoint for sending the data to the storyEdit page. \n\nThat being said, when we re-examine the end points to make the storytelling tool more RESTful. We may need to change things at that time.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-18T07:39:14.673-0500",
      "body": "It appears that there is nothing new needed for this, as the `/stories/:id` end point is already returning the story back. Currently this end point is used for the storyView.html page but appears to provide all of the necessary information needed for loading a story into edit mode as well. In the future we'll review the end points to make things more RESTful (see: <https://fluidproject.atlassian.net/browse/SJRK-416#icft=SJRK-416>) and may modify things at that point.\n"
    }
  ]
}
---
Create a server endpoint/route to load the Story Edit page with a given story, which may or may not already be published.

This could be provided via the Story ID in the query string, or perhaps as part of the URL path.

The client-side aspect of this work is covered by <https://fluidproject.atlassian.net/browse/SJRK-410#icft=SJRK-410>.

        