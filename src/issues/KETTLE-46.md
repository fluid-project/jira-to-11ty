---json
{
  "title": "KETTLE-46",
  "summary": "Isolate kettle.dataSource.URL for ease of reuse on the client-side....",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-07-05T05:31:39.346-0400",
  "updated": "2016-08-30T10:06:52.110-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-07-05T05:48:05.842-0400",
      "body": "<https://github.com/fluid-project/kettle/pull/24>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-07-05T05:51:08.223-0400",
      "body": "I have made the minimum changes to enable proof-of-concept work in using `kettle.dataSource.URL` in-browser.  All tests pass and the change does not affect the level of code coverage.\n\nWe need to have a larger discussion around where data sources should live, for now I will write the initial browser tests for kettle.dataSource.URL in the UL API repo.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-07-05T08:30:28.573-0400",
      "body": "I have discovered that jsonlint has a different structure when called from node, basically it wires itself in as the parser when it's used from CommonJS.  Kettle expects to find jsonlint.parser, which doesn't exist on the browser side.  The workaround (which we should review) is simply to set `jsonlint.parser = jsonlint`\n\nI also discovered that the implementation of `kettle.dataSource.URL` relies on the node-side `kettle.wrapCallback` function:\n\n<https://github.com/fluid-project/kettle/blob/9fdef26a796eaab5dd1f531a940f08f3d7761912/lib/KettleRequest.js#L91>\\\n<https://github.com/fluid-project/kettle/blob/9fdef26a796eaab5dd1f531a940f08f3d7761912/lib/dataSource-node.js#L313>\n\nI will create a workaround for that as well until we can discuss further.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-08-30T10:06:52.079-0400",
      "body": "Happy to see this one closed, as we agreed, we need a parallel implementation backed by jQuery.\n"
    }
  ]
}
---
Currently, the node-unique dataSource components live in one file, with the browser-safe components in another file.

To make it possible to use `kettle.dataSource.URL` with `browserify` (see [GPII-1587](https://issues.gpii.net/browse/GPII-1587)), we should further compartmentalize the pieces that can only ever run on node (such as the dataSources that use the "fs" module) from things like kettle.dataSource.URL, which can conceivably be run in the browser using browserify.

This spike would not add client-side tests, it would only confirm that all tests pass once the code is reorganized.  To preserve support for references to the old structure used in calls like `fluid.require("%kettle/lib/dataSource-node.js");}, I plan to require the new file from within {{dataSource-node.js`.

cc: @@Antranig Basman

        