---json
{
  "title": "FLOE-497",
  "summary": "Update dependencies, use new /dist from NPM for sourcing Infusion, investigate test failures",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-01-11T09:48:41.153-0500",
  "updated": "2017-02-24T13:38:51.307-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-497/FLOE-497 stack trace.png",
      "filename": "FLOE-497 stack trace.png"
    }
  ],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-01-11T14:01:16.678-0500",
      "body": "The issue (see attached stack trace) appears to originate in the cleanup process of the IoC testing framework, but I believe it has to do with changes to the core of Infusion. (reason: manually rolled back IoCTestUtils.js to the version from the working commit hash below, and same problem occured).\n\nThis is the last working version of Infusion published to NPM that works: <https://github.com/fluid-project/infusion/tree/a2802dfd9012184984c99f6dd6778e0f14cf7fbe> (2.0.0-dev.20161002T002156Z.a2802df)\n\nThis is the next NPM version in line, where the test begins to fail: <https://github.com/fluid-project/infusion/tree/0bcd507499bf4968630813c25c8146a8163a1e39> (2.0.0-dev.20161027T155641Z.0bcd507)\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-12T11:22:18.318-0500",
      "body": "I've isolated the error to changes in the **fluid.instantiator**() function of **fluidIoC.js**, specifically the internal function that.clearComponent() that gets attached to the instantiated component.\n\nFirst isolated by replacing the internal function with the one from the previous working hash locally, at which point the failure at the end of the test go away.\n\nThe specific issue seems to be with whatever behaviour is served by the new destroyRecs options and the new that.clearConcreteComponent() internal function - commenting out the line **fluid.each(options.destroyRecs, that.clearConcreteComponent);** also makes the test failure stop.\n\nI theorize this may be a manifestation of an issue we've seen previously in a different form, which is \"competition\" between Flocking's own clean-up (all of the \"Ignoring call...\" log messages are to Flocking components) and the IoC testing framework's cleanup.&#x20;\n\nAlternately, this may have surfaced an edge case in changes to the IoC functionality, perhaps in its interaction with Flocking.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-12T11:57:42.584-0500",
      "body": "@@Antranig Basman / @@Colin Clark - when you have time could you comment on the above? I've hit my own easy limits of being able to trace Infusion IoC issues.\n\nThis is not an urgent issue because I can pin Chart Authoring to the latest working version of Infusion, but it does prevent me from taking advantage of the new /dist directory from the more recent versions of the NPM package.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-12T12:07:44.388-0500",
      "body": "Per @@Colin Clark's advice, updating to a development branch of Flocking that's compatible with Infusion 2.0 has fixed the test issue. Pull request opened: <https://github.com/fluid-project/chartAuthoring/pull/17>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-02-24T13:38:47.080-0500",
      "body": "The pull request <https://github.com/fluid-project/chartAuthoring/pull/17> has been merged into the project repo master branch at 23232ccb4078f05725879ef030366f280cd90b3e.\n"
    }
  ]
}
---
Maintenance & anti-entropy for the chart authoring tool:

DEPENDENCY UPDATES:

* update to the official 2.0.0 release of Infusion available via NPM
* update to the latest Flocking, which has some bug fixes
* use the new /dist directory from NPM that contains pre-packaged Infusion

TEST FIXES:

After updating to the 2.0.0 release of Infusion, the Chart Authoring tests are now failing. with a 73rd assertion being run (there are only 72 in the test suite) and "TypeError: shadow is undefined" (FF) / "TypeError: undefined is not an object (evaluating 'shadow.path')" (Safari) / "FluidIoC.js:1046 Uncaught TypeError: Cannot read property 'path' of undefined" (Chrome) - this failure is not present in the current master at <http://build.fluidproject.org/chartAuthoring/tests/html/chartAuthoring-Tests.html> and appears to be because of an issue with the change in Infusion version

In all cases the direct error is line 1046 of FluidIoC.js: <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidIoC.js#L1046>

See comments for more exact tracing of the error.

        