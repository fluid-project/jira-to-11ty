---json
{
  "title": "DECA-235",
  "summary": "Factor out the creation of the genpdf command from the generatePDFFromPages function",
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
  "date": "2012-02-06T14:01:55.814-0500",
  "updated": "2012-05-18T14:23:02.750-0400",
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
      "date": "2012-02-06T14:56:53.486-0500",
      "body": "Refactored the code to split off the assembly of the genpdf command into a new function. I added unit tests to verify the assembly function.\n\nChanges are currently in my bitbucket repo.\\\n<https://bitbucket.org/jobara/decapod-server-response>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:22:59.756-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Currently the generatePDFFromPages function both assembles the genpdf command line argument and triggers the creation of the pdf. This makes it hard to test that the command line argument is being assembled correctly.

        