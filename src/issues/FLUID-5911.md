---json
{
  "title": "FLUID-5911",
  "summary": "Review and update qunit-composite.js for newer versions of QUnit...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-05-30T05:27:34.205-0400",
  "updated": "2024-07-22T09:25:16.343-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-01T04:12:42.962-0400",
      "body": "I encountered problems related to the age of our QUnit when trying [qunit-tap](https://github.com/twada/qunit-tap) per a suggestion from  @@Antranig Basman.\n\nThey have specifically had problems with QUnit 1.12.0 (the version we keep a local copy of) for a few years running.  1.13.0 or higher seems fine:\n\n<https://github.com/twada/qunit-tap>\n\nI am trying to use [an older version of qunit-tap](https://github.com/twada/qunit-tap/tree/1.3.0), but this really doesn't seem sustainable in the longer term.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-01T04:52:04.394-0400",
      "body": "We should review in Toronto, from what I can see in my testing, the older version of qunit-tap only works with QUnit 1.10.0, and cannot be used with our forked copy of 1.12.0.\n\nThe next version of qunit-tap explicitly added details about the fact that 1.12.0 isn't supported, so it's likely that it never worked with QUnit 1.12.0.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-27T07:40:59.996-0400",
      "body": "Here's another example that came up in a recent PR:\n\n<https://github.com/GPII/gpii-launcher/pull/1#discussion_r85289741>\n\nIn later versions of 1.x, QUnit started migrating to a new approach, using QUnit.test with an explicit call to QUnit.stop() instead of asyncTest.  As I refresh my memory with their docs periodically, I started adopting this transitional approach a while back.  It works with node-jqUnit as well.\n\nHowever, in QUnit 2.x, there's a new [\"async\" function](https://api.qunitjs.com/async/) that is used within a QUnit.test function instead of calling stop and start.   I just wrote a quick test script to confirm, all previous variations are disallowed in QUnit 2.x.  Only the new async method is supported.\n\nEven if we decide that we can't leave 1.12.0 behind, we need to make the difference clearer.  In the node-jqunit docs, we currently point people at the QUnit docs as though they reflect what can be done with node-jqunit.  At a minimum, we should update node-jqunit and any QUnit docs within infusion to indicate the QUnit versions we support, and we should point to QUnit documentation that corresponds to what we support.  Here for example are the building blocks of the docs for 1.12.0:\n\n<https://github.com/jquery/api.qunitjs.com/tree/3d3576ad22bcaf21cde0769250f7043e1197a8b1>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-27T07:43:14.517-0400",
      "body": "We do have at least some guidance for Infusion itself (although that incorrectly claims that QUnit 2.x has not been released):\n\n<https://github.com/fluid-project/infusion-docs/blob/98fa4e0a222108d0acd337118ba645083d43cfee/src/documents/jqUnit.md>\n\nAdding that kind of disclaimer to node-jqUnit is fine for now, but both should be updated to point to appropriate QUnit documentation.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-27T07:52:05.669-0400",
      "body": "Here for reference are the three approaches in a single file:  <http://pastie.org/10951023>\n\nThe first two are commented out as I was testing with QUnit 2.x, which throws a script error if either of the earlier variations is used.\n"
    }
  ]
}
---
In working with [Karma](http://karma-runner.github.io/), I discovered a clear point at which [qunit-composite.js](https://github.com/fluid-project/infusion/blob/master/tests/lib/qunit/addons/composite/qunit-composite.js) will no longer work with newer versions of QUnit.  Although there may be other problems, the immediate error is a result of the `addEvent` function being called from qunit-composite.js. That function was made private between [v1.1.4](https://github.com/jquery/qunit/blob/1.14.0/qunit/qunit.js) and [v1.15](https://github.com/jquery/qunit/blob/1.15.0/qunit/qunit.js) of QUnit.

I was trying to use the `QUnit.testSuites`[ function](https://github.com/fluid-project/infusion/blob/master/tests/lib/qunit/addons/composite/qunit-composite.js#L112) to load HTML fixtures in Karma.  There is [a very old release of the karma qunit plugin](https://github.com/karma-runner/karma-qunit/blob/v0.1.4/package.json) that uses an old enough version of QUnit to be compatible, I will try that in the short term.

However, this is just one symptom of a looming problem.  We have pinned a part of our tests to a copy of an aging version of QUnit.  Long term, we should move to having QUnit as a clear dependency, and should regularly test updates.

        