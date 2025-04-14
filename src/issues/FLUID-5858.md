---json
{
  "title": "FLUID-5858",
  "summary": "FluidIoC tests fail sporadically",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2016-02-11T07:06:40.707-0500",
  "updated": "2016-02-11T11:37:10.875-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": "Fedora Linux 23 / Firefox 44.0\\\nWindows 10 / Firefox 44.0.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-11T11:19:44.184-0500",
      "body": "I attempted to reproduce this on a Surface Pro 3 running Windows 10.&#x20;\n\nI ran the tests 3 times using Firefox 44.0.1,  one time had an error with the enactors tests.\\\nI ran the tests 3 times using Firefox 44.0.1 in private browsing mode, all cases the tests all passed.\n\nNOTE: I had cleared the browser history and cache before starting the above.\n\nIt might be an issue with browser caching between test runs?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-02-11T11:36:48.918-0500",
      "body": "I cleared the cache between runs.&#x20;\n\nYesterday I was running the tests on one laptop and this morning I reproduced the issue on a different laptop. Although \"reproduced\" probably means I \"lucked out\" because it's inconsistent.\n\nI was running firefox with \"--safe-mode\" to disable extensions/plugins.\n"
    }
  ]
}
---
FluidIoC tests fail sporadically when part of [all-tests.html](http://build.fluidproject.org/infusion/tests/all-tests.html). When run individually ([here](http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoC-test.html) and [here](http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoCStandalone-test.html)), they always work.

```
Framework Tests: ./framework-tests/core/html/FluidIoC-test.html (2, 0, 2)Rerun68 ms

    Parser Tests: global failure: SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data
    Expected: 	

    undefined

    Source: 	

    runLoggingCallbacks@http://build.fluidproject.org/infusion/tests/lib/qunit/js/qunit.js:1599:4

    Expected 462 assertions, but 1 were run
    Source: 	

    QUnit.asyncTest@http://build.fluidproject.org/infusion/tests/lib/qunit/js/qunit.js:401:3
```

        