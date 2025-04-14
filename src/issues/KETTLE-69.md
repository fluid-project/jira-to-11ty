---json
{
  "title": "KETTLE-69",
  "summary": "Failing test in DataSourceSimpleTests",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-06-20T09:32:58.503-0400",
  "updated": "2018-06-21T08:48:08.647-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Mac OS X, node v9.4.0, npm v6.1.0\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-06-20T11:26:45.793-0400",
      "body": "Update: the test passes on my work desktop environment, so I think this may be an issue specific to my home laptop environment. I'll investigate further.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-06-21T07:51:31.508-0400",
      "body": "Works fine for me on Windows 7, node 8.9.4 npm 5.6.0. Perhaps some kind of bug with node 9.x https protocol parsing? I tend to avoid the odd-numbered releases ...\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-06-21T08:47:49.747-0400",
      "body": "Downgrading my home laptop to the Node LTS release (node 8.11.3, npm 5.6.0) resolved this issue. \n\nI also tried upgrading to Node 10.5.0 and the tests failed completely due to a failure with leveldown (I didn't log it, unfortunately) - this may be related to an issue with the OSX dev tools / make on my laptop environment, though.\n\nClosing for now.\n"
    }
  ]
}
---
Found while working on refactoring for KETTLE-66, confirmed present (in my environment at least) on fluid-project/master as well.

Log:

```java
09:30:25.410:  jq: FAIL: Test name "KETTLE-34 request option resolution test" - Message: Resolved expected requestOptions
09:30:25.410:  jq: Expected: {
    "protocol": "https:",
    "port": 999,
    "auth": "user:password",
    "path": "/path",
    "method": "GET",
    "host": "thing.available:997",
    "family": 4,
    "headers": {
        "x-custom-header": "x-custom-value",
        "x-custom-header2": "x-custom-value2"
    }
}
09:30:25.410:  jq: Actual: {}
09:30:25.410:  jq: Source:     at Object.assertDeepEq (/Users/aharnum/work/kettle/node_modules/infusion/tests/test-core/jqUnit/js/jqUnit.js:180:23)
    at Object.jqUnit.assertLeftHand (/Users/aharnum/work/kettle/node_modules/infusion/tests/test-core/jqUnit/js/jqUnit.js:256:16)
    at Object.<anonymous> (/Users/aharnum/work/kettle/tests/DataSourceSimpleTests.js:91:20)
09:30:25.411:  jq: Test concluded - Test name "KETTLE-34 request option resolution test": 0/1 passed - FAIL
```

        