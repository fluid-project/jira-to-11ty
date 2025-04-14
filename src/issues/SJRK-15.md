---json
{
  "title": "SJRK-15",
  "summary": "Enable deleting existing stories",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T15:14:41.578-0400",
  "updated": "2018-05-25T14:37:15.307-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T16:06:19.691-0500",
      "body": "Implies, as with sharing/privacy, that there is some sort of story authorship management system.\\\nWhat would the interaction of a story being deleted look like?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-22T13:56:23.679-0400",
      "body": "A basic delete story handler has been implemented in the [SJRK-56-karisma branch](https://github.com/waharnum/sjrk-story-telling-server/tree/SJRK-56-karisma), is this sufficient for the purposes of this Jira? do we need a more sophisticated and/or robust solution to satisfy the spirit of this issue?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-25T14:37:15.307-0400",
      "body": "We are satisfied with the current implementation. If at some point we would like something a bit more user-friendly, we can file a new issue for the creation of an administrative interface.\n"
    }
  ]
}
---
Implement in sjrk-storyTelling-server the means to delete a story that has been stored in the database.

        