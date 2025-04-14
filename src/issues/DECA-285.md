---json
{
  "title": "DECA-285",
  "summary": "Some server config needs to be run through cherrypy.config.update to be applied",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-06-14T16:24:43.535-0400",
  "updated": "2012-07-03T10:38:09.009-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-18T15:27:32.896-0400",
      "body": "Updated the server to support configuration like server.socket\\_host. Also added a unit test to verify it.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-03T10:38:05.542-0400",
      "body": "merged into the googlecode project repo\n"
    }
  ]
}
---
Currently the server can't consume all types of cherrypy configuration. Some config needs to be run through cherrypy.config.update before being used. For example: sever.socket\_host

To fix this all that needs to be done is to add "cherrypy.config.update(config)" before the call to cherrypy .tree.mount

        