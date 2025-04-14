---json
{
  "title": "DECA-222",
  "summary": "Refactor resourcesource.py",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-18T12:00:46.005-0500",
  "updated": "2012-05-18T14:18:27.830-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-20T10:51:25.349-0500",
      "body": "can possibly look at using cherrypy.url\\\n<http://docs.cherrypy.org/stable/refman/cherrypy.html?highlight=cherrypy.url#cherrypy.url>\\\n<http://tools.cherrypy.org/wiki/RoutesUrlGeneration>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-30T12:15:22.664-0500",
      "body": "I've refactored resouresource.py by making use of the cherrypy.url function and looking into cherrypy's request object's config. The unit tests were updated too and should all be running after these changes.&#x20;\n\nThe work is currently in my bitbucket repo.\\\n<https://bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:18:24.295-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
resourcesource.py should be refactored. Currently it needs to be used by every controller and may have too much knowledge about the state of operations.

        