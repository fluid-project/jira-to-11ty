---json
{
  "title": "KETTLE-72",
  "summary": "kettle.loadTestingSupport fails because of missing form-data dependency",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-08-29T04:49:27.581-0400",
  "updated": "2018-10-04T09:58:20.702-0400",
  "versions": [
    "1.8.0"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-09-05T09:26:51.590-0400",
      "body": "PR opened: <https://github.com/fluid-project/kettle/pull/47>\n"
    }
  ]
}
---
@@Alan Harnum recently added new functionality to Kettle, which requires the form-data module.  That dependency is currently a dev dependency.  The net result is that calling `kettle.loadTestingSupport()` from another package now results in errors like:

```java
10:45:41.189:  FATAL ERROR: Uncaught exception: Cannot find module 'form-data'
Error: Cannot find module 'form-data'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/duhrer/Source/rtf/gpii-testem/node_modules/kettle/lib/test/KettleTestUtils.form.js:19:16)
    at Module._compile (module.js:570:32)
    at Module.replacementCompile (/Users/duhrer/Source/rtf/gpii-testem/node_modules/nyc/node_modules/append-transform/index.js:58:13)
    at Module._extensions..js (module.js:579:10)
    at Object.<anonymous> (/Users/duhrer/Source/rtf/gpii-testem/node_modules/nyc/node_modules/append-transform/index.js:62:4)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.kettle.loadTestingSupport (/Users/duhrer/Source/rtf/gpii-testem/node_modules/kettle/kettle.js:40:5)
```

The solution is to move the dependency into the main block.

        