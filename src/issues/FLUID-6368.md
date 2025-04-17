---json
{
  "title": "FLUID-6368",
  "summary": "infusion-all.js throws an error if required from the browser.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2019-02-12T05:32:28.584-0500",
  "updated": "2024-07-22T10:35:07.249-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6574/",
      "key": "FLUID-6574"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-02-12T05:45:43.285-0500",
      "body": "I suspect the error was introduced [in this commit](https://github.com/fluid-project/infusion/commit/8ecfb480779a593a159979d44d67bb4a635da2cd#diff-b9cfc7f2cdf78a7f4b91a753d10865a2), dev releases before that date include a copy of infusion-all.js that is safe to require.  I'm sure we don't test with these because we want coverage data.   As Testem catches and reports the error, I'd suggest creating a separate testem config that runs tests against the bundles.  The test itself would just include the bundle and a trivial passing test.  Since Justin Obara is largely out, I may just take this on while I'm thinking of it.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-02-12T05:48:04.469-0500",
      "body": "My initial thought is that we might have a stray global definition of module.exports that results in that check passing.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-02-12T06:03:25.512-0500",
      "body": "I can't reproduce this in an infusion-all built from current trunk. You may have done something within gpii-testem or its instrumentation to dump a module object at top level into the browser?\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-02-12T06:42:59.461-0500",
      "body": "In preparing a branch to test this, I verified that recent versions of the bundle are includable as long as module.exports isn't defined.  I'm going to see what's defining that and causing the gpii-testem tests to fail, but it looks like the package itself is OK, which lowers the urgency.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-04-05T08:16:53.010-0400",
      "body": "This was automatically resolved, but there is still work to be done.  I'm reopening and will work on running the new tests in CI shortly.\n"
    }
  ]
}
---
In updating the dependencies in gpii-testem, I noticed that infusion-all.js now throws an error if you include it from a browser (Testem caught the uncaught exception and reported it as a test failure):

```java
not ok 8 Opera 57.0 - [0 ms] - global failure
    ---
        stack: >
            http://localhost:7357/node_modules/infusion/dist/infusion-all.js:45605
        message: >
            Uncaught ReferenceError: require is not defined
        Log: |
    ...
```

I tracked that down to this line in jquery.scrollTo:

<https://github.com/flesler/jquery.scrollTo/blob/master/jquery.scrollTo.js#L17>

I was hoping someone familiar with recent changes might be able to explain why we're passing that check and trying to "require" jQuery.

        