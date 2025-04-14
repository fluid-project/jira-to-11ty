---json
{
  "title": "DECA-165",
  "summary": "Migrate Decapod to GIT from Mercurial",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2011-09-27T14:06:11.963-0400",
  "updated": "2012-06-01T10:12:42.080-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-01T10:12:42.077-0400",
      "body": "Currently it is the decision of the community to remain in Mercurial. if this changes at a later date, this jira should be reopened or a new one created.\n"
    }
  ]
}
---
Convert the mercurial repos to a single git repo, and put up on github.

What's needed

1\) convert individual mercurial repos to git repos\
2\) merge individual git repos into a single git repo\
3\) remove all old files that were specific to mercurial\
4\) fix the tags and branches as needed\
5\) update the install scripts\
6\) update the readme if necessary\
7\) create a Decapod organization on github and push up the new repo

        