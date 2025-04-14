---json
{
  "title": "FLUID-6519",
  "summary": "Run tests on Linux, Windows and macOS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-06-16T08:27:37.067-0400",
  "updated": "2024-07-22T10:35:12.240-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6520/",
      "key": "FLUID-6520",
      "summary": "Do not run tests on IE11 anymore"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-06-16T09:24:29.398-0400",
      "body": "@@Giovanni Tirloni regarding running tests against Safari on macOS there is an issue with testem and recent versions of Safari. I filed an issue with them <https://github.com/testem/testem/issues/1387> \n"
    }
  ]
}
---
There was a desire to get tests running on the 3 platforms to increase the number of browsers we test with.

        