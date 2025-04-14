---json
{
  "title": "FLUID-5167",
  "summary": "Grunt modulefiles task can't handle missing/non-array dependencies",
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
  "date": "2013-10-02T15:29:58.994-0400",
  "updated": "2014-02-03T09:16:44.642-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-07T11:50:36.668-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/grunt-modulefiles/pull/1> ).&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T08:40:14.376-0400",
      "body": "Combined changes with the fix for <https://fluidproject.atlassian.net/browse/FLUID-5168#icft=FLUID-5168> in a new pull request ( <https://github.com/fluid-project/grunt-modulefiles/pull/2> )\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-02-03T09:16:09.380-0500",
      "body": "Merged into the project repo @ 1d2c188905f63b73ef5ed0b8e6cf25dcb00164f5\n"
    }
  ]
}
---
If a dependencies json file doesn't have any dependencies property (or if the property is a string instead of an array of strings), the modulefiles plugin throws an error.

        