---json
{
  "title": "KETTLE-53",
  "summary": "kettle.dataSource.URL.writable appears to truncate payloads that contain special characters...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-01-04T10:30:30.898-0500",
  "updated": "2017-01-05T08:48:38.400-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/KETTLE-51/",
      "key": "KETTLE-51",
      "summary": "kettle.dataSource.URL.writable does not calculate data length correctly when data contains special character(s)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-01-05T07:48:27.313-0500",
      "body": "This is most likely a duplicate of <https://issues.fluidproject.org/browse/KETTLE-51> - would you like to test Cindy Li 's fix for it?\n\n<https://github.com/fluid-project/kettle/pull/29>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-01-05T08:41:09.202-0500",
      "body": "Thanks, this very much seems like the same issue.  I will test her branch/commit with the proof-of-concept code and report back shortly.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-01-05T08:48:21.170-0500",
      "body": "Confirmed, Cindy's fix addresses the problem.  I will close this as a duplicate.\n"
    }
  ]
}
---
In recent work migrating older work to using kettle.dataSource.URL.writable in place of [request](https://github.com/request/request), I started noticing odd problems when I would PUT or POST records.  Around 400 out of 2700+ records I was uploading were failing to save.

After long investigation, I determined that JSON payloads containing special characters are not transmitted correctly, resulting in ECONNRESET errors.

To demonstrate this in isolation, I prepared the following simple code:

```java
"use strict";
var kettle = require("kettle");
var dataSource = kettle.dataSource.URL({
    gradeNames: ["kettle.dataSource.URL.writable"],
    writeMethod: "PUT",
    url: "http://requestb.in/1jbw0ek1"
});

dataSource.set({}, { payload: "some éüø stuff"});
```

If I submit this, the payload is truncated before the closing quote and brackets, as in:

```java
{
    "payload": "some éüø stuff
```

I used requestb.in for the demo, but when working with other services like CouchDB, I get ECONNRESET errors, which makes sense given the output above.

If I replace the payload with non-special characters, the entire payload is transmitted as expected. Looking at [the docs](https://github.com/fluid-project/kettle/blob/master/docs/DataSources.md), it seems like the defaults (JSON payloads, utf8 encoding) should be enough to work with special characters, but apparently it's not.

cc: Antranig Basman

        