---json
{
  "title": "VULAB-141",
  "summary": "Glubox: Integrate http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-12-22T15:35:54.000-0500",
  "updated": "2014-03-04T08:25:35.421-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-141/VULAB-141.patch",
      "filename": "VULAB-141.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-12-22T15:44:47.000-0500",
      "body": "simply changed the location of the jquery.js library from a local source to the remotely hosted google source.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-05T11:12:05.000-0500",
      "body": "integrated.\n"
    }
  ]
}
---
Change out the static version of jquery that the gluebox currently uses and use the hosted google library.

        