---json
{
  "title": "SJRK-196",
  "summary": "Disable the \"Publish my story\" button if the story is empty",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Open",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-22T14:17:18.943-0500",
  "updated": "2019-04-01T16:09:37.475-0400",
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
      "author": "Gregor Moss",
      "date": "2019-04-01T13:48:11.620-0400",
      "body": "Consider:\n\n* a story with only a title\n* only an an author name\n* only keywords\n\nwhat should we do?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-04-01T15:59:14.042-0400",
      "body": "In the case of:\n\n* just keywords - it doesn't make sense to publish in this case as the keywords are meant to describe the story. there's no story to describe\n* just an author - we're creating a collection of stories and not a list of people/authors, so this also doesn't make much sense\n* just a title - philosophically speaking, an empty story with only a title may have value, but for our purposes and for the time being we're going to prevent this\n"
    }
  ]
}
---
Disable the "Publish my story" button when the story is empty and display a message to the author indicating that they must add content before attempting to publish a story.

This work will effectively disallow the behaviour that was made possible in SJRK-182 and SJRK-183.

Should the tool allow a particular block to be published without having the associated media file present? E.g. an image block with no image specified, but values in the other fields? How about a text block with no content, only a heading?

        