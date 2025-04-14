---json
{
  "title": "ENGAGE-173",
  "summary": "Engage Demo index page has incorrect paths when run without the server",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-10-23T10:58:32.000-0400",
  "updated": "2017-12-22T09:44:20.791-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-1/",
      "key": "KETTLE-1",
      "summary": "For Kettle's path rewriting to work, all paths to a mounted directory have to be at the same level"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:20.790-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Engage Demo index page has incorrect paths when run without the server

You have to run the index.html page, for the Engage Demo through eclipse or from a server using the war file, or else the paths to pull in files from Infusion are incorrect.

        