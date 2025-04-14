---json
{
  "title": "KETTLE-57",
  "summary": "Concurrency failure marking request to thread when handling multiple static requests",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-02-01T08:39:21.033-0500",
  "updated": "2019-09-25T15:58:18.239-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-09-25T15:58:18.236-0400",
      "body": "Resolved when PR was merged - seems to a fault in our workflow system\n"
    }
  ]
}
---
There is a fault in the timing of our system for "marking the current request to the current thread" as operated by utilities such as kettle.request.active, kettle.request.clear etc. When receiving multiple back-to-back requests aimed at the static middleware, for example, we receive concurrency failures like these:

```java
19:15:12.406:  Request id c9jrqow2-150 for URL /lib/normalize/css/normalize.css
19:15:12.420:  Invoking handler fluid.authoring.nexus.infusionStaticHandler for route /* with expectedGrade kettle.request.http
19:15:12.430:  ASSERTION FAILED: Error marking thread to request c9jrqow2-167 - this thread is already marked to request c9jrqow2-150 . Make sure to invoke this
 request asynchronously.
19:15:12.432:  Current activity:
    while firing to listener to event named onCreate of component {
    "typeName": "fluid.authoring.nexus.infusionStaticHandler",
```

This feature is a long-standing annoyance, and very hard to verify - in theory we could do without it if it wasn't for the possibility that some raw I/O callback may be to an invoker which requires to resolve a reference to {request}. Or it is possible that even that situation is no longer relevant, and we only do this to properly contextualise errors invoked in such callbacks.

        