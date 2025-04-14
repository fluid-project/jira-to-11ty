---json
{
  "title": "FLUID-5137",
  "summary": "Implement a grunt plugin to assemble local modules",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-09-18T12:41:16.957-0400",
  "updated": "2013-09-18T13:13:21.982-0400",
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
      "date": "2013-09-18T13:13:21.955-0400",
      "body": "plugin create and in the <https://github.com/fluid-project/grunt-modulefiles> repo. version 0.1.0 tagged.\n"
    }
  ]
}
---
Infusion divides its source files into modules by means of json dependency files. A grunt plugin should be developed to 1) locate the json depedency files 2) allow for include/exlude of modules 3) return the set of files need for the requested modules, for use in other grunt tasks.

        