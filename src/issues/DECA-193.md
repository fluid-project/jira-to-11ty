---json
{
  "title": "DECA-193",
  "summary": "Convert Cherrypy's dispatcher to better support REST",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-11-28T05:10:04.075-0500",
  "updated": "2012-05-18T14:16:59.268-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-194/",
      "key": "DECA-194"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-11T14:30:59.660-0500",
      "body": "I've started working on this in a repo bitbucket\\\n<https://bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-18T14:19:26.491-0500",
      "body": "I've made the changes and pushed them up to my bitbucket repo. \\\n<https://bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:16:54.695-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Use the Cherrypy's method dispatcher to better support RESTful web services.

Possibly change the dispatch method to cherrypy.dispatch.MethodDispatcher().\
see: <http://docs.cherrypy.org/dev/progguide/REST.html>

        