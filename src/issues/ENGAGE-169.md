---json
{
  "title": "ENGAGE-169",
  "summary": "The project name for fluid-engage-kettle is named fluid-engage-server, which doesn't match with the name of the underlying directory.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2009-10-22T18:44:54.000-0400",
  "updated": "2009-11-10T14:17:03.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-10T14:17:03.000-0500",
      "body": "This appears to have been fixed. The project is now called fluid-engage-kettle\n"
    }
  ]
}
---
At the moment, Engage's server and Kettle are located in a directory called fluid-engage-kettle, but the Eclipse project is still called fluid-engage-server. We should update this so the directory and project names match.

        