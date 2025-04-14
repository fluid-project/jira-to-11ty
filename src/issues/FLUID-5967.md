---json
{
  "title": "FLUID-5967",
  "summary": "Provide a way to get the version of the fluid-publish module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-09-22T08:54:57.004-0400",
  "updated": "2024-07-22T10:35:11.540-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-22T09:51:52.487-0400",
      "body": "Added to PR for <https://fluidproject.atlassian.net/browse/FLUID-5799#icft=FLUID-5799> ( <https://github.com/fluid-project/fluid-publish/pull/5> )\n"
    }
  ]
}
---
The fluid-publish module ( <https://github.com/fluid-project/fluid-publish> ) should provide a means of getting it's version programatically. For example a publish.getPublishPkgVersion and also a command line argument ( "--version" ).&#x20;

On the command line, if ( "--version" ) is supplied, only the version should be output and no publishing should occur.

        