---json
{
  "title": "KETTLE-52",
  "summary": "Add documentation/examples for using kettle.dataSource.URL with cookies....",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-01-03T05:07:28.585-0500",
  "updated": "2017-01-09T09:47:27.566-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-01-09T09:47:27.566-0500",
      "body": "Looks like the current implementation has half-rotted - it dates from the pre-maturity days of Kettle and there seem to be no tests for use of dataSources together with cookies. Also, the only implementation of \"cookieJar\" is inappropriately within kettle.test.dataSource. Finally, it appears that Tony Atkins \\[RtF]'s investigations show that the dataSource integration with cookies is readOnly - cookies are only read from the jar and never written. And indeed, following fixing all of this and writing tests for it, we then need docs.\n"
    }
  ]
}
---
In reviewing earlier work with an eye towards migrating to using dataSource grades in place of node requests, I encountered the common pattern where I need to first login in, and ensure that subsequent requests use the same cookie jar as the first request, i.e. a cookie jar that contains the session cookie received after successfully logging in.

In looking at [the code](https://github.com/fluid-project/kettle/blob/master/lib/dataSource-url.js#L37), it looks like there is support for cookie jars, and that it's very similar to kettle.request.  It would be helpful if this were covered in the docs, especially with a simple example.

        