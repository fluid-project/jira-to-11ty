---json
{
  "title": "KETTLE-33",
  "summary": "Error handling in Datasources and requests is faulty",
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
  "date": "2015-08-05T09:55:20.077-0400",
  "updated": "2016-05-25T18:56:48.814-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2015-08-05T12:15:05.777-0400",
      "body": "Commit with hotfix for part of this issue: <https://github.com/fluid-project/kettle/pull/20>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2015-08-06T10:13:51.309-0400",
      "body": "Reviewed and merged at ef796237b7b157df6837a970a8b798370ef14144.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-06T13:29:29.031-0400",
      "body": "We should keep this open until a more comprehensive fix with test cases arrives in the large branch\n"
    }
  ]
}
---
There are two faults in Kettle's current error handling.

Firstly: in the http variant of the URL data source - there is no attempt to check the HTTP status code, and the returned promise always resolves rather than rejecting - and so straighforward relaying of dataSources onto HTTP servers fails to work:

gpii.deviceReporter\["static"].get = function (requestProxy, deviceReporter) {\
var promise = deviceReporter.installedSolutionsDataSource.get();\
promise.then(function (solutions) {\
deviceReporter.fireResponse(requestProxy, solutions);\
}, function (err) {\
requestProxy.events.onError.fire(err.message);\
});\
};

Secondly, there is no guarding in the request resolution in request.js to account for the fact that the request may have already ended in error (from Infusion's point of view) before the response is written - see in request.js:

kettle.requests.request.http.ensureResCompleted = function (that) {\
// NOTE: This is here because any of these events can represent the\
// moment when the server is finished with the response.\
fluid.each(\["close", "finish", "end", "error"], function addListener(event) {\
that.res.on(event, function eventListener() {\
that.events.onRequestEnd.fire();\
that.destroy();\
});\
});\
};

compare this with the corresponding guarding using fluid.isDestroyed in request.io.js

        