---json
{
  "title": "FLOE-467",
  "summary": "The Chart Authoring Tool's unit tests are currently failing",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Colin Clark",
  "date": "2016-06-23T18:17:16.761-0400",
  "updated": "2016-09-13T13:01:54.330-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
There seem to be two different types of failures in the Chart Authoring Tool:

1. A failure in Flocking when destroying the Environment prior to destroying any Synths that have a reference to it
2. Tests that fail at least semi-regularly when run using QUnit composite from the all-tests.html suite. This seems to be due to asynchronous tests starting at the wrong time.

For #1, we need to do the following:

* Upstream in Flocking, ensure that hard errors don't occur when trying to destroy a synth that no longer has a valid Environment reference. [This has been fixed](https://github.com/colinbdclark/Flocking/issues/183) thanks to @@Alan Harnum.
* Provide a means in the Chart Authoring Tool itself for creating a Flocking environment as early as possible (i.e. immediately after Flocking's own scripts have loaded)
* Ensure that the CA Tool's own unit tests define their own custom environment that can be created and torn down on each test run.

For #2, the following tests seem to be failing:

* legend-Tests.html
* sonifier-Tests.html
* chartAuthoring-Tests.html

@@Alan Harnum [mentioned in the IRC channel that these tests all employ the fluid.resourceLoader component to asynchronously load templates](https://botbot.me/freenode/fluid-work/2016-06-23/?msg=68477194\&page=2).

        