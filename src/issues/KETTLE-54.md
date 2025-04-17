---json
{
  "title": "KETTLE-54",
  "summary": "Cannot distinguish errors from successes using only onWrite and onError listeners...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-01-05T04:09:29.944-0500",
  "updated": "2017-01-09T10:03:42.514-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-01-09T10:03:42.514-0500",
      "body": "You are correct that the current implementation is faulty, but we need to elaborate exactly how, since neither of the two expectations (1. and 2. in your issue) correspond to the fix we should have. Recall from the docs that onWrite is not a standard event but a pseudoevent - <https://github.com/fluid-project/kettle/blob/master/docs/DataSources.md#transforming-promise-chains> - meaning that they form the actual implementation of the dataSource data pipeline, and are not merely notifications fired from various stages of it. The other crucial upshot of this is that the **return values** from each of these listeners is crucial - by returning nothing from onWrite.log you've actually completely destroyed the payload which would have been sent to the network - in this case this isn't so relevant since the network activity has been set up to fail.\n\nI think you have the ordering of activities the wrong way round - it is not that \"when an error occurs, the remaining onWrite listeners are notified with the original payload\". As the implementation is structured, ALL onWrite listeners are notified, in the order corresponding to their payloads, and then the actual network activity occurs as a result of dataSource.setImpl. So your log notification actually precedes the error, not the other way round.\n\nYou're completely correct that the current implementation does not provide any decent means to provide processing \"which only occurs in the event of a successful write\" (or read). The answer to this is to fix the factoring of dataSource which has been pending for a while. It has inherited a rather screwed-up and asymmetric design based around hard-wired invokers named getImpl and setImpl. Instead these should be folded into the main request processing pipeline as standard listeners to onRead and onWrite, as described in <https://fluidproject.atlassian.net/browse/KETTLE-55#icft=KETTLE-55>. It would then be possible to attach listeners to the namespace, e.g. \"after:backing\" which would then only execute in the case of a successful network write.\n"
    }
  ]
}
---
In troubleshooting KETTLE-53, part of the problem was that the network error was obscured because of the order in which events are fired.  What happens is that, when an error occurs:

1. The remaining onWrite event listeners are called **with the original payload**.
2. The onError listener is called

As far as I can see, this combination of behaviors makes it unsafe to rely solely on onError and onWrite listeners, as you cannot tell that an error has occurred before you receive what might either be the receipt from a successful write or simply the original unaltered payload.

The workaround for the time being is to only use {kettle.dataSource.URL.writable}.set in its promise form.  The problem and the workaround are demonstrated here:

```java
"use strict";
var fluid = require("infusion");
fluid.setLogging(true);

function logPromiseSuccess () {
    fluid.log("promise success...")
}

function logPromiseFailure () {
    fluid.log("promise failure...")
}

var kettle = require("kettle");
var dataSource = kettle.dataSource.URL({
    gradeNames: ["kettle.dataSource.URL.writable"],
    writeMethod: "PUT",
    url: "http://localhost:9999/",
    listeners: {
        "onWrite.log": {
            priority: "last",
            funcName: "fluid.log",
            args: ["onWrite event with payload:\n", "@expand:JSON.stringify({arguments}, null, 2)"]
        },
        "onError.log": {
            priority: "last",
            funcName: "fluid.log",
            args: ["onError event..."]
        }
    }
});

var promise = dataSource.set({}, { payload: "data"});
promise.then(logPromiseSuccess, logPromiseFailure);
```

Here is sample output:

```java
10:03:53.952:  onWrite event with payload:
{
  "payload": "data"
}
10:03:53.954:  DataSource Issuing HTTP request with options {
    "port": "9999",
    "method": "PUT",
    "headers": {
        "Content-Type": "application/json",
        "Content-Length": 0
    },
    "protocol": "http:",
    "auth": null,
    "host": "localhost:9999",
    "hostname": "localhost",
    "path": "/",
    "url": "http://localhost:9999/",
    "termMap": {
        
    },
    "directModel": {
        
    },
    "operation": "set",
    "reverse": true,
    "writeMethod": "PUT"
}
10:03:53.964:  onError event...
10:03:53.964:  promise failure...
```

Note that the onWrite, which should receive the results of a successful write, is instead receiving the original payload.  Since onWrite is fired first, there is no way to cleanly decide whether to send a receipt or an error message.  Note also that the promise rejection handler is fired, but not the promise success handler.

I would expect one of two things to happen when an error is encountered:

1. onError is fired and no remaining onWrite events are fired.
2. onError is fired, and then the remaining onWrite events are fired.  This would allow for retries, but also for clear "stop the world" type error processing by setting a "dirty" member to indicate that a failure has already occurred.

cc: Antranig Basman

        