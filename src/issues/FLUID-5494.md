---json
{
  "title": "FLUID-5494",
  "summary": "Minor improvements to framework debugging support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-17T12:33:15.889-0400",
  "updated": "2015-06-26T09:55:58.674-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-11-20T19:03:21.849-0500",
      "body": "Merged into trunk at revision <https://github.com/fluid-project/infusion/commit/d591ebe6e5f2475dffda1ffbdd12d4247de9de09> - Aug 22 2014\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.419-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Issues discovered when upgrading GPII and Kettle testing infrastructure:

FluidIoC.js line 1311 bindDeferredComponent

var event = eventName.charAt(0) === "{" ? fluid.expandOptions(eventName, that) : that.events\[eventName];\
event.addListener(function () {

"blind failure" is possible here if event expands to null.

IoCtestUtils.s line 191 decodeListener

var maker = testCaseState.expandFunction(fixture.listenerMaker);\
var args = testCaseState.expand(fixture.makerArgs);\
listener = maker.apply(null, args);

"blind faliure" is possible here if maker expands to null

        