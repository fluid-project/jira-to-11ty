---json
{
  "title": "DECA-231",
  "summary": "Mock images are too low resolution. Replace with a more representative sample.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2012-01-31T11:22:07.986-0500",
  "updated": "2012-05-18T14:50:29.170-0400",
  "versions": [
    "0.5"
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
      "author": "Jonathan Hung",
      "date": "2012-01-31T11:23:31.428-0500",
      "body": "The trick is to figure a good way of hosting the new images since they are large. Also these images should be downloadable during the installation procedure (maybe should be optional?).\n\nA possible place to host file is the SVN repo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:50:29.169-0400",
      "body": "The mock images currently used by the server and ui for testing and demoing are working fine with Decapod.\n"
    }
  ]
}
---
The current mock images are too low resolution to be useful for testing genpdf.

These should be replaced with higher quality images that are more representative of the content to be handled by Decapod.

        