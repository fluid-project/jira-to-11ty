---json
{
  "title": "FLUID-3160",
  "summary": "php unit tests do not run on titan",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-08T13:37:58.000-0400",
  "updated": "2010-01-18T10:59:43.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure",
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3162/",
      "key": "FLUID-3162",
      "summary": "Add the Infusion Builder to the Fluid daily build server"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T12:40:42.000-0500",
      "body": "all aspects of the Infusion Builder should run on the daily build server, including the php unit tests.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-18T10:59:43.000-0500",
      "body": "this is no longer an issue because the daily build of the infusion builder was moved to forge, where the php tests do run.\n"
    }
  ]
}
---
On titan, we need to compile php's package Simpletest in order to run the php unit tests. In order to do this, php needs to be re-compiled. We'd rather wait and do this when it is needed, rather than risking this just for a unit test.

        