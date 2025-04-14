---json
{
  "title": "FLUID-3188",
  "summary": "remove reliance on hard coded filename",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-21T15:09:59.000-0400",
  "updated": "2009-12-02T13:38:45.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-09-21T16:31:50.000-0400",
      "body": "This cannot be done as the filename is hardcoded into the build.xml.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-22T16:26:57.000-0400",
      "body": "I think this should be re-visited as the version number is already being obtained in PostClass.php\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-04T15:25:45.000-0500",
      "body": "removed SRC\\_FILE\\_NAME and MIN\\_FILE\\_NAME from config.php and replaced with dynamically creating these values in postProcessor.php. Refactored config.php slightly to accommodate the change (changed the instructions about how to use and moved the defines around a bit as suggested by Justin in today's review).&#x20;\n"
    }
  ]
}
---
Currently we use a hard coded file name as the output filename for the custom build zip. We would like to change that and obtain at least part of the file name from the fluid-version field in build.properties.

        