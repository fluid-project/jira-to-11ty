---json
{
  "title": "ENGAGE-101",
  "summary": "Invalid file paths in a Kettle app includes file causes a Rhino exception to be thrown, rather than a more meaningful exception",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-09-26T22:38:13.000-0400",
  "updated": "2009-11-10T11:57:27.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-10-02T12:55:16.000-0400",
      "body": "Reordered finally block at  8215\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T11:57:27.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
If a user specifies a file path in their includes file that doesn't point to a valid file, they don't get a meaningful error message. Instead, we fall into the finally block in RhinoLoader.loadFile(), where it tries to close the Rhino context.&#x20;

This is a problem in the case of invalid paths, since (I think) the exception is thrown upon creation of the FileReader, before the Rhino context has even been entered.

We should probably just throw a friendly error in this case and avoid closing the Rhino context.

        