---json
{
  "title": "DECA-221",
  "summary": "Write unit tests for the server python code",
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
  "date": "2012-01-18T11:57:06.217-0500",
  "updated": "2012-05-18T14:17:57.074-0400",
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
      "date": "2012-01-20T08:25:02.520-0500",
      "body": "Requires changes from <https://fluidproject.atlassian.net/browse/DECA-225#icft=DECA-225>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-26T14:35:17.784-0500",
      "body": "I've refactored, added, and expanded on the server side unit tests. There are now tests for each of the server side scripts, with the exception of the backgroundTaskQueue.py which from a 3rd party.&#x20;\n\nThe changes are in my bitbucket repo.\\\n<https://bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:17:54.063-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The unit tests for the cherrypy server only covered the functionality for camera capture and calibration. Since this was removed, there are no unit tests for any of the existing cherrypy server code. Also the unit tests for the various other python code used by the server should be updated as needed.&#x20;

        