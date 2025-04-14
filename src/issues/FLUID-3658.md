---json
{
  "title": "FLUID-3658",
  "summary": "Elevate protoComponent expansion functionality developed for Engage into core framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-05-26T13:23:10.306-0400",
  "updated": "2014-03-03T13:43:11.553-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2578/",
      "key": "FLUID-2578"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3658/dependencies.patch.txt",
      "filename": "dependencies.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T01:02:52.679-0400",
      "body": "Merged into trunk at revision 9968. \"expanders\" housed in namespace fluid.renderer, tests including recursive invocation of expanders (\"nested loops\")\n"
    },
    {
      "author": "y z",
      "date": "2010-08-04T14:42:09.901-0400",
      "body": "Updated list of dependencies to get a proper build.\n"
    }
  ]
}
---
For Fluid Engage, a piece of "draft infrastructure" was created by the name of "protoComponents" in file "engageRenderUtils.js". This functionality is being used in CollectionSpace and should be elevated into the core framework, as well as receiving a completed implementation for model-driven expansion

        