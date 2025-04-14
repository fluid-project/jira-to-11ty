---json
{
  "title": "FLUID-4039",
  "summary": "Extend Fluid model accessors (fluid.get) to support access through any form of \"direct model\" in place of \"EL\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-01-21T03:42:45.727-0500",
  "updated": "2011-05-17T11:57:20.611-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4039/failing.test.patch.txt",
      "filename": "failing.test.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2011-01-21T13:22:01.214-0500",
      "body": "failing.test.patch.txt has a test with an empty model.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-02-04T03:40:19.828-0500",
      "body": "Resolved with new implementation at what is now git revision 1971f9a.\n"
    },
    {
      "author": "y z",
      "date": "2011-05-17T11:53:27.300-0400",
      "body": "The test case is now passing and the issue can be resolved.\n"
    }
  ]
}
---
Plain EL paths are an awkward form to express the "coordinates" of a part of model indirected through a general query. Where the "coordinates" of the required state in the model require variable numbers of arguments or an irregular sequence, "escaping" all of the coordinate details to a flat string creates a fragile and unreadable representation. It would be preferable to express these forms of "coordinate models" (that is, "coordinates OF models, expressed as a model", also known in the context of DataSources, as "direct models") in JSON form. The fluid.get pathway needs to be upgraded to support suitably structured JSON supplied as the "EL" argument, as well as a system for configuring an expandable collection of "resolvers", which are "typed machines for resolving coordinate state". This functionality also relates to the upcoming functionality for expressing model transformations - the collection of "resolvers" should be possible to view as, or transform into, a configuration suitable for a model transformation as operated by the "options chewing framework".

        