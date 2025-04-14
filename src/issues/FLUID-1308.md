---json
{
  "title": "FLUID-1308",
  "summary": "build.fluidproject.org files are minified",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jacob Farber",
  "date": "2008-08-25T13:25:04.000-0400",
  "updated": "2011-03-17T15:06:05.433-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-16T14:37:39.000-0400",
      "body": "The build site script has been modified to use unminified versions of the files.\n"
    }
  ]
}
---
It would probably be better to have fully readable code on the site, since we use it to isolate bugs.

        