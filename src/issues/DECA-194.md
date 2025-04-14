---json
{
  "title": "DECA-194",
  "summary": "Improve the REST handling of the cherrypy server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2011-12-07T03:33:53.304-0500",
  "updated": "2011-12-07T03:37:22.776-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-193/",
      "key": "DECA-193",
      "summary": "Convert Cherrypy's dispatcher to better support REST"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Modify the cherrpy server to better handle REST.&#x20;

Possibly change the dispatch method to cherrypy.dispatch.MethodDispatcher().\
See: <http://docs.cherrypy.org/dev/progguide/REST.html>

        