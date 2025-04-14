---json
{
  "title": "FLUID-5956",
  "summary": "Firefox 48 reports a FluidIoC test error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Avtar Gill",
  "date": "2016-09-13T11:54:18.878-0400",
  "updated": "2016-09-13T16:14:18.124-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-09-13T16:14:13.404-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/750> has been merged into the project master branch at 03f573d2e74452d27a582a72b7ed19bbb79ed6dd\n"
    }
  ]
}
---
Working on FLUID-5953 resulted in errors being reported by several browsers, one of them was a FluidIoC-test failure. Allocating one processor core and 1GB of RAM to a [IDI Windows 10 VM](https://atlas.hashicorp.com/inclusivedesign/boxes/windows10-eval) seems to reproduce this error on most test runs.&#x20;

The `tests/all-tests.html` test runner seems to show the failure being logged before the IoC tests though. The failure first gets logged in the QUnit Composite iframe while the Renderer tests are being run but it's eventually logged as a FluidIoC test failure in the final report.

        