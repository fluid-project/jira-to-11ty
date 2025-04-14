---json
{
  "title": "FLUID-5938",
  "summary": "Pull gpii.test.settleStructure up into the main framework in FluidPromises.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-08-03T14:31:57.672-0400",
  "updated": "2019-07-30T10:21:32.443-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-07-30T10:21:32.443-0400",
      "body": "Note that the gpii.test.settleStructure implementation is currently not quite written suitably - rather than reject the entire structure at the first rejection, it should instead honour the general \"settle\" concept by proceeding to resolve all remaining promises and then produce a summary of those which rejected, with a structure such as\n\n```java\n{\r\n   isError: true,\r\n   rejectedPaths: [ .... list of paths holding individual rejections ...],\r\n   structure: <the settled structure with original promises replaced by resolved payloads >\r\n}\n```\n"
    }
  ]
}
---
A useful general-purpose promise utility was developed as part of the GPII testing infrastructure named gpii.test.settleStructure - it will accept an arbitrary data structure containing promises and return a promise for the resulting structure with each promise replaced by its resolved value, or a rejection if any promise rejects.

As well as representing a generally useful idiom (this appeared in the framework in CSpace days as the "deferred fetch expander) this operates a helpfully complementary idiom to fluid.promise sequence in that all of the promises are operated in parallel.

Currently held at <https://github.com/GPII/universal/blob/master/gpii/node_modules/testing/src/Testing.js#L42>

        