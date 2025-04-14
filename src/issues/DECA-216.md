---json
{
  "title": "DECA-216",
  "summary": "The server doesn't report all errors and exceptions ",
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
  "date": "2012-01-12T13:18:09.109-0500",
  "updated": "2012-07-10T13:49:06.364-0400",
  "versions": [
    "0.5a",
    "0.5"
  ],
  "fixVersions": [
    "0.6"
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
      "date": "2012-07-06T09:09:56.721-0400",
      "body": "I've added new exceptions to the python modules. Updated the response codes returned by the server, and will now set an error status for the export status if the export process fails.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:49:03.305-0400",
      "body": "Merged into the googlecode repo\n"
    }
  ]
}
---
When the server encounters an error, it doesn't always throw proper exceptions, nor return the proper http responses indicating what has happened.

        