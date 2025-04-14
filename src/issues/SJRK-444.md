---json
{
  "title": "SJRK-444",
  "summary": "Store session in the database",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-12-14T11:56:37.668-0500",
  "updated": "2021-01-25T15:31:50.363-0500",
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
      "author": "Justin Obara",
      "date": "2021-01-25T15:31:50.363-0500",
      "body": "I have been looking into [sessionStore](https://www.npmjs.com/package/sessionstore) for saving the session to the couchDB database. However, it isn't clear that it actually clears expired sessions from the database. <https://github.com/robinfehr/sessionstore/blob/master/lib/databases/couchdb.js>\n"
    }
  ]
}
---
As part of SJRK-405 we are using \
<https://www.npmjs.com/package/memorystore> which is a production ready in memory session store. However, in the future we should switch to one that is backed by a database so that the sessions will persist after a server restart. At the moment we've gone with the in memory one as it requires less overhead to start with and we do not know for sure if we'll be sticking with couchDB as the database for storytelling.

Alternatives available are mentioned under the [Compatible Session Stores](https://www.npmjs.com/package/express-session#compatible-session-stores) for express-session; which is the underlying middleware used by kettle.

        