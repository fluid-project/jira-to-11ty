---json
{
  "title": "DECA-233",
  "summary": "Update successful response status codes returned by the server",
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
  "date": "2012-02-06T10:48:54.116-0500",
  "updated": "2012-05-18T14:22:06.971-0400",
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
      "date": "2012-02-06T13:13:21.205-0500",
      "body": "I've updated the controllers to return the spec'd response codes.\n\nThe changes are in my bitbucket repo.\\\n<https://bitbucket.org/jobara/decapod-server-response>\n\nAlso needed to make a temporary change to patch the Infusion code in UI. This will be fixed permanently with <https://fluidproject.atlassian.net/browse/DECA-232#icft=DECA-232>\\\n<https://bitbucket.org/jobara/decapod-ui-response>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:22:02.932-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The successful response status codes returned by the server should follow what is laid out in the server ROA spec.\
<http://wiki.fluidproject.org/display/fluid/Proposed+Decapod+Server+Architecture>

        