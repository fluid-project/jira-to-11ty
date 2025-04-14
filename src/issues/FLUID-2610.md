---json
{
  "title": "FLUID-2610",
  "summary": "Build scripts don't include license files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2009-04-20T11:02:11.000-0400",
  "updated": "2009-06-03T13:39:16.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1943/",
      "key": "FLUID-1943",
      "summary": "License files should be stored in a separate directory in the final build, rather than within the various subdirectories of js/ and flash/"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2609/",
      "key": "FLUID-2609"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-13T11:40:04.000-0400",
      "body": "Should be fixed with <https://fluidproject.atlassian.net/browse/FLUID-1943#icft=FLUID-1943>\n"
    }
  ]
}
---
The build scripts currently don't include our license files at the top level. Third party licenses seem to be there, but this should be double-checked.

        