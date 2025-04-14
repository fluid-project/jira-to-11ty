---json
{
  "title": "FLUID-5269",
  "summary": "Consider publishing grunt-modulefiles plugin",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Justin Obara",
  "date": "2014-02-07T13:48:11.347-0500",
  "updated": "2021-06-22T13:41:58.026-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
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
      "date": "2021-06-22T13:41:58.025-0400",
      "body": "We have moved away from using grunt and are now using npm scripts for task running.\n"
    }
  ]
}
---
Currently the grunt-modulefiles plugin is only available via git end point. We should consider publishing it to the grunt plugin repository so that it will be more easily usable by ourselves and other projects.

<http://gruntjs.com/creating-plugins>

        