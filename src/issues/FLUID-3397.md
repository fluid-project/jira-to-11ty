---json
{
  "title": "FLUID-3397",
  "summary": "Infusion Builder's javascript unit tests are poorly factored, making them hard to debug and difficult to read",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Colin Clark",
  "date": "2009-12-01T18:57:08.000-0500",
  "updated": "2014-03-03T11:20:13.368-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T13:41:47.000-0500",
      "body": "Updated title of this issue. There were some words missing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.367-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
The Infusion Builder's unit tests have been designed in an awkward way, causing state to be deeply coupled to all portions of the test. This makes the tests hard to read and understand, and gives them a monolithic structure that can be difficult to work with. Because we've factored the test functions themselves out into "creator functions," it's also very difficult to debug a particular instance of a test run correctly.

While it's tempting to just rewrite the tests from scratch, my suggestion is to start splitting pieces of the tests out into simpler chunks with less dependence on closure-derived state. With time, we can break out the tests into a few different files to ensure that they're correctly modularized.

        