---json
{
  "title": "DECA-225",
  "summary": "Refactor the mountApp and startServer functions to make it easier to test with having to start the server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-19T14:59:02.277-0500",
  "updated": "2012-05-18T14:19:36.223-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-19T15:31:45.443-0500",
      "body": "I was able to remove the coupling by reverting to a similar style as was in effect before <https://fluidproject.atlassian.net/browse/DECA-195#icft=DECA-195>, using cherrypy.engine.start instead of cherrypy.quickstart. I was able to prevent a return of <https://fluidproject.atlassian.net/browse/DECA-195#icft=DECA-195> by subscribing to signal and console control handlers, and telling cherrypy to block with cherrypy.engine.block()\n\nThe changes are currently in my bitbucket repo\\\n<https://bitbucket.org/jobara/decapod-server-rest>\n\nThe example that helped me\\\n<http://groups.google.com/group/cherrypy-users/browse_thread/thread/b347284512e2c6c1?fwc=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-20T08:22:28.632-0500",
      "body": "Made a small update to only block when running in standalone.&#x20;\n\nSee example: <http://tools.cherrypy.org/wiki/ScgiWsgi>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:19:31.388-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Currently there is too much coupling between mountApp and startServer. To be able to start the server you have to mount an app and to be able to mount an app you have to get the resources from the startServer function. Move the resources into mountApp and return them, so that the startServer can use it. This will allow the unit test to just mount the app and not actually start the server.&#x20;

        