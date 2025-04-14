---json
{
  "title": "INFRA-217",
  "summary": "Hosting for GSoC Games projects",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-09-11T11:55:57.078-0400",
  "updated": "2020-07-09T02:53:57.353-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6527/",
      "key": "FLUID-6527"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-09-14T10:28:15.621-0400",
      "body": "Playtown: <https://build.fluidproject.org/lab/playtown/>\\\nMusic Mania: <https://build.fluidproject.org/lab/music-mania/>\n\nSpifind appears to require some work to have its build process produce a deployable artifact.\n"
    }
  ]
}
---
We'd like to host the inclusive games that were made as part of GSoC on our own infrastructure:

* <https://github.com/fluid-lab/playtown>
* <https://github.com/fluid-lab/Spifind>
* <https://github.com/fluid-lab/Music-Mania>

These should probably all be built and run in separate containers.

        