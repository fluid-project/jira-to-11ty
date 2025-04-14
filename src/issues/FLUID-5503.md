---json
{
  "title": "FLUID-5503",
  "summary": "Create simple scheme for locating and loading files and resources relative to a module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-31T07:18:25.267-0400",
  "updated": "2018-06-07T07:00:25.787-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5521/",
      "key": "FLUID-5521"
    }
  ],
  "attachments": [],
  "comments": []
}
---
A lot of brittleness is caused in our projects by having to hard-code path references, sometimes between projects. For example, here is an include from a configuration file, builtIn\_config.json from GPII's windows project:

"includes": \[\
"../../../../node\_modules/universal/tests/acceptanceTests/configs/localInstall.json"\
]\
}

As well as being very hard to interpret, this relative path forces a fixed relative position in the filesystem between the source and target of the reference (the windows project and the universal project).

We should create a simple system whereby modules can register themselves and their base location, and provide interpolation for simple strings of the form, for example, where the above reference would be encoded as

${universal}/tests/acceptanceTests/configs/localInstall.json

At the same time this would also resolve the brittle "self-reference" problem where a module cannot necessarily expect to issue a "require" for itself given it may not have been checked out into a node\_modules directory.

        