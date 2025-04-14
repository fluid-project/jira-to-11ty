---json
{
  "title": "DECA-278",
  "summary": "Add support for new genpdf functions to Decapod server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T15:47:48.977-0400",
  "updated": "2012-07-03T10:38:41.392-0400",
  "versions": [],
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
      "date": "2012-06-29T17:59:44.489-0400",
      "body": "Update the server to take in query parameters for additional options for genpdf. The underlying code now takes these options and passes them down to the command line call to genpdf.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-03T10:38:38.915-0400",
      "body": "merged into the googlecode project repo\n"
    }
  ]
}
---
Add server support for the new genpdf functions:

* DPI
* Dimensions
* Colour
* Bit depth

        