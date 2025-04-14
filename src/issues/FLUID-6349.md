---json
{
  "title": "FLUID-6349",
  "summary": "Browser test duration showing as \"undefined ms\" ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Giovanni Tirloni",
  "date": "2018-11-04T15:12:54.669-0500",
  "updated": "2024-07-22T10:35:26.473-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-11-05T07:12:30.247-0500",
      "body": "@@Tony Atkins \\[RtF] is this something you may be able to track down?\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-11-05T10:07:26.594-0500",
      "body": "Hi, @@Justin Obara.  This is definitely a problem with Testem and/or my wrapper around it.  I'm tracking the work here:\n\n<https://issues.gpii.net/browse/GPII-3500>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-11-05T10:50:48.789-0500",
      "body": "Turns out it's a problem with our fork of QUnit using a different variable name here:\n\n<https://github.com/fluid-project/infusion/blob/78e76b7a5efa4016c24dba92a77ed25787deffc4/tests/lib/qunit/js/qunit.js#L344>\n\nIt should be \"runtime\", if that's populated the timing data shows up with no changes to gpii-testem.  I'll create a quick pull against infusion to fix it.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-11-05T10:58:28.969-0500",
      "body": "See: <https://github.com/fluid-project/infusion/pull/943>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-11-06T09:44:21.639-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/943> ) into the project repo at d726d64d66e997f011077443047b005a9b344b19\n"
    }
  ]
}
---
The issue seems to have been happening for a while in CI but unfortunately, we don't keep enough build history to determine when it started:

```
17:24:56.143:  Successfully reached the end of promise chain. Firing testem callback.
ok 1 Firefox 62.0 - [undefined ms] - Framework Tests: /tests/framework-tests/core/html/Caching-test.html
ok 2 Firefox 62.0 - [undefined ms] - Framework Tests: /tests/framework-tests/core/html/DataBinding-test.html
ok 3 Firefox 62.0 - [undefined ms] - Framework Tests: /tests/framework-tests/core/html/DataSource-test.html
...
```

        