---json
{
  "title": "DECA-195",
  "summary": "Shouldn't have to kill the python process to quit the cherrypy server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-10T11:14:04.921-0500",
  "updated": "2012-01-19T15:38:39.011-0500",
  "versions": [
    "0.4",
    "0.5a"
  ],
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
      "date": "2012-01-10T11:15:04.777-0500",
      "body": "During our trip to BUK and UI in Nigeria, both sets of users would prefer to not have to kill the process to quit the server\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-10T12:43:23.599-0500",
      "body": "a quicker way to quit the server is with \"ctrl-\\\\\" which triggers a SIGQUIT. This could be another temporary work around.\\\n<http://www.kingcomputerservices.com/unix_101/sending_signals.htm>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-10T15:02:46.974-0500",
      "body": "Instead of using cherrypy.mount.tree and cherrypy.engine.start we should be able to get this working properly by just calling cherrypy.quickstart\\\n<http://docs.cherrypy.org/dev/refman/cherrypy.html#functions>\n\nThis should allow us to quit the server with ctrl-c\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-10T15:09:50.533-0500",
      "body": "If we can't use the cherrypy.quickstart, we should be able to manually subscribe to the signal handler.\\\n<http://docs.cherrypy.org/stable/refman/process/plugins/signalhandler.html>\n\nI did try this briefly, without success. Although I would imagine that a more focussed attempt would have better results.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-11T13:17:43.063-0500",
      "body": "I made another attempt at getting it to work with manually subscribing to the signal handler, but still to no avail. I did find another example though, which may prove helpful in the future.\n\n<http://tools.cherrypy.org/wiki/ScgiWsgi>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-11T13:46:53.199-0500",
      "body": "Pushed a fix for this to my bitbucket repo\\\n<https://bitbucket.org/jobara/decapod-server/changeset/eede86bc0271>\n\nNeeds to be pulled into the master in googlecode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-16T11:45:35.005-0500",
      "body": "pushed up to the main googlecode repo\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-19T15:32:57.230-0500",
      "body": "I was able to get the preferred, alternate, method to work by subscribing to the signal and console handlers, as well as using cherrypy.engine.block() after calling cherrypy.engine.start().\n\nThese changes are part of the fix for <https://fluidproject.atlassian.net/browse/DECA-225#icft=DECA-225>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-19T15:38:38.977-0500",
      "body": "This example was useful in figuring out the above fix ( <http://groups.google.com/group/cherrypy-users/browse_thread/thread/b347284512e2c6c1?fwc=1> )\n"
    }
  ]
}
---
Currently to quit the Cherrypy server you have to kill the process ( kill -9 PID number ). You should be able to quit it just by using ctrl-c.\
<http://docs.cherrypy.org/stable/concepts/basics.html>

        