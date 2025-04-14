---json
{
  "title": "DECA-28",
  "summary": "Deploy Decapod Capture on the build server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Boyan Sheytanov",
  "date": "2010-01-14T04:05:04.000-0500",
  "updated": "2012-06-01T10:14:22.189-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-67/",
      "key": "DECA-67",
      "summary": "Move Decapod code from scratchpad to incubator"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-01T10:14:22.181-0400",
      "body": "The capture work flow has been removed from the 0.5 release\n"
    }
  ]
}
---
We need to have a daily build of Capture running on the build server. To do that, we will probably need some python packages for the CherryPy server. These include, but are not limited to, cherrypy3, numpy, matplotlib.

        