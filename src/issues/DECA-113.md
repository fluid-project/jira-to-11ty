---json
{
  "title": "DECA-113",
  "summary": "Decapod's server contains hardcoded paths in a number of places",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-06-09T00:01:42.705-0400",
  "updated": "2012-01-10T09:50:01.795-0500",
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
      "url": "/browse/DECA-111/",
      "key": "DECA-111"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-06-25T19:10:29.600-0400",
      "body": "Hardcoded paths have been largely removed from the MockServer in favour of the ResourceSource. dserver still needs to updated accordingly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T10:25:26.147-0400",
      "body": "Hardcoded paths have been removed completely with the introduction of the ResourceSource, and the removal of the forked servers.\n"
    }
  ]
}
---
The Decapod server has hardcoded paths in a number of locations:

1\. In dserver.conf, the configuration file used to set CherryPy static mount points (tools.staticdir.root)\
2\. In both copy/pasted version of the server's capture() method (a path to Capture.html)

These should be removed to reduce brittleness and assumptions about how the file system is laid out.

        