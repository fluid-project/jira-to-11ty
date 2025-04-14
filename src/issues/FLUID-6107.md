---json
{
  "title": "FLUID-6107",
  "summary": "Move to a centralized copyright notice",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2017-01-11T11:26:29.979-0500",
  "updated": "2019-09-06T09:57:34.488-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6325/",
      "key": "FLUID-6325",
      "summary": "Simplify copyright information by maintaining copyright holders in a centralized location"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-267/",
      "key": "SJRK-267",
      "summary": "Move to a centralized copyright notice"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently all of our code contains a copyright notice at the top that lists the copyright holders and the licence. As part of the Infusion 2.0 release we did a search through the repo and updated these notices ( <https://github.com/fluid-project/infusion/pull/792> ). It was a difficult process to keep things up to date, and we may be better served having a centralized notification for copyright holders that we point at from each file and rely on the version control system for tracking individual contributions.

* <https://softwarefreedom.org/resources/2012/ManagingCopyrightInformation.html>
* <https://botbot.me/freenode/fluid-work/2016-11-29/?msg=77196617&page=3>

        