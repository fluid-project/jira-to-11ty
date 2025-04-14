---json
{
  "title": "KETTLE-36",
  "summary": "Clean up console.log calls in KettleRequest",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2015-09-28T03:44:57.157-0400",
  "updated": "2016-12-04T17:24:55.012-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-12-04T17:24:55.008-0500",
      "body": "These were removed prior to the 1.0 Kettle release\n"
    }
  ]
}
---
There are a few calls to console.log in KettleRequest.js, for example on line 69:

```java
console.log("withRequest executing to resume callback " + callback);
```

When using kettle.dataSource.URL, this results in messages like the following in both tests and production logs:

```java
withRequest executing to resume callback function onEnd() {
  promise.resolve(received);
}
```

The calls to console.log in this file should be either removed or converted to fluid.log calls so that they can optionally be turned off.

        