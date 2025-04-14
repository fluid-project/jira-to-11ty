---json
{
  "title": "FLUID-5168",
  "summary": "Update modulefiles grunt plugin to handle file dependencies paths relative to json location",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-02T15:45:49.389-0400",
  "updated": "2014-02-03T09:16:34.580-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-08T08:39:39.499-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/grunt-modulefiles/pull/2> )\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-02-03T09:15:45.076-0500",
      "body": "Merged into the project repo @ 1d2c188905f63b73ef5ed0b8e6cf25dcb00164f5\n"
    }
  ]
}
---
The modulefiled grunt plugin currently assumes that the file paths are relative to the location of the grunt file itself. To be useful in Infusion, it will need to assume they're relative to the json file location.

        