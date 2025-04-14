---json
{
  "title": "DECA-21",
  "summary": "Move directory and file checks to Sever initialization",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-23T10:56:04.000-0400",
  "updated": "2012-01-10T09:53:19.665-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-96/",
      "key": "DECA-96",
      "summary": "Evaluate support for Ocropus directory structure"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:51:06.037-0400",
      "body": "This was addressed during server refactoring for 0.4. We expect to be able to create all relevant directories such as the location of captured images and the generated PDF. This is done on server startup.\n"
    }
  ]
}
---
If some directories do not have proper permission to write files, the scripts we run via command line may terminate abnormally.\
Currently, directory checks are being done inside take\_picture - this should move to a different part of the workflow.

One logical location to place directory checks is when a new book is created. When a book is created, we generate all the necessary directories and set the proper permissions.

        