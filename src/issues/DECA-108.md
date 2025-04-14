---json
{
  "title": "DECA-108",
  "summary": "Refactor UI and Server code to work with the various repositories as being checked out as siblings.",
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
  "reporter": "Justin Obara",
  "date": "2010-05-20T12:44:37.888-0400",
  "updated": "2012-01-10T09:48:53.110-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:47:47.634-0400",
      "body": "This issue was fixed with the introduction of the ResourceSource and configuration for all file paths and Web URLs.\n"
    }
  ]
}
---
In Decapod 0.3 the ui and server code were collocated and the genpdf and stitching scripts where checked out inside of it. They are now all in separate repositories and should work as siblings (checked out next to each other).

        