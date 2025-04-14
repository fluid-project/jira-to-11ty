---json
{
  "title": "DECA-210",
  "summary": "Configure a server that can automate testing of genpdf and Decapod",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-01-12T10:30:21.223-0500",
  "updated": "2012-09-07T11:28:35.624-0400",
  "versions": [],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "genpdf",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To help test genpdf, Decapod will require a machine capable of running automated tests using images in a test suite. The images are very large (some 200MB) and the genpdf process can be resource intensive, so the system must be able to accomodate that.

The test suite can be found here:\
<http://source.fluidproject.org/svn/design/decapod/testing-images/>

        