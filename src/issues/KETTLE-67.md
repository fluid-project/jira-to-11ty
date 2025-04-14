---json
{
  "title": "KETTLE-67",
  "summary": "Kettle's default uncaught exception handler must always exit process with an error",
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
  "date": "2018-03-12T13:18:24.281-0400",
  "updated": "2018-06-28T13:43:18.729-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The current Kettle uncaught exception handler for the "fail" namespace looks like this:

```java
kettle.requestUncaughtExceptionHandler = function (err) {
    var request = kettle.getCurrentRequest();
    // If there is no active request
    if (!request) {
        return;
    }
    // If there is an active request, ensure that it fails with this diagnostic
    request.events.onError.fire({
        isError: true,
        message: err.message
    });
};
```

As well as looking like a remnant of the old-fashioned "monolithic" handler era, it has the extremely undesirable property that merely by loading kettle into any node process, top-level uncaught exceptions will no longer cause the process to exit with a failure code - this is particularly awkward, e.g. if this happens during the code loading process. We should replace this with a sane and properly granular implementation - or perhaps just register it with a different namespace, before "fail" proper

        