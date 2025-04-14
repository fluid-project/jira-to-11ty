---json
{
  "title": "FLUID-5126",
  "summary": "Listeners registered via a demands block will corrupt records when expanded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-09-06T18:28:06.746-0400",
  "updated": "2014-03-03T11:28:59.001-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-09-12T16:29:17.013-0400",
      "body": "Merged into project repo at be8ef9052cd3f0c29cefdc501ceac6fdcf165ffb\n"
    }
  ]
}
---
This issue was discovered when debugging into an issue with the GPII integration tests for <http://issues.gpii.net/browse/GPII-20> (actually in branch named GPII-177). It was found impossible to get more than 2 tests to run in sequence without encountering a stereotypical kind of failure, common across both the windows and linux branches:

message: 'Assertion failure (see console.log for expanded message): Failed to resolve reference {dataSource}.options.url - could not match context with name dataSource from component leaf ,\[object Object]',\
source: '    at jqUnit.invocationTracker.that (/home/yura/gpii/node\_modules/universal/node\_modules/infusion/src/tests/test-core/jqUnit/js/jqUnit.js:35:19)\n    at Object.fluid.fail (/home/yura/gpii/node\_modules/universal/node\_modules/infusion/src/framework/core/js/Fluid.js:171:13)\n    at Object.fetcher (/home/yura/gpii/node\_modules/universal/node\_modules/infusion/src/framework/core/js/FluidIoC.js:609:23)\n    at fetch (/home/yura/gpii/node\_modules/universal/node\_modules/infusion/src/framework/core/js/FluidIoC.js:1718:32)\n    at Object.fluid.resolveContextValue (/home/yura/gpii/node\_modules/universal/node\_modules/infusion/src/framework/core/js/FluidIoC.js:1725:20)\n    at Object.fluid.expandSource (/home/yura/gpii/node\_modules/universal/node\_modules/infusion/src/framework/core/js/FluidIoC.js:1822:34)\n    at Object.options.expandSource&#x20;

This was eventually traced to a problem with corruption of the framework's records, in combination with the strategy of the GPII integration testing framework which issued demands blocks to the framework multiple times (once per instantiation of a "server"). The telltale accumulation of listeners could be seen in the following message just prior to the failure:

17:22:13.591:   Firing event onUserListener of component with typename kettle.requests.request.handler and id 1d24skmy-749 to list of 6 listeners

The correct number of listeners to this event is 2, but in fact 2 had accumulated for each reinstantiation of a kettle server in each subsequent tests. Because of the issue described in this headline JIRA, some of these listeners contained references to components which had already been destroyed, causing the resolution failure.

Although the integration testing system can be improved to head off this issue, by only issuing demands blocks once, the impossibility of guarding against this issue in general suggests that the demands block system should be disused.

In this case, the duplicate listeners were being registered from the following declarative structure "base.json" as part of GPII's "FlowManager":

{\
"demands": \[{\
"demandingName": "kettle.requests.request.handler",\
"contextNames": "userLogin",\
"demandSpec": {\
"options": {\
....\
"listeners": {\
"onUserListener": \[{\
"listener": "{kettle.requests.request.handler}.getPreferences"\
}, {\
"listener": "{kettle.requests.request.handler}.getDevice"\
}],

Records in the framework are becoming corrupted through expansion to hold the resolved listener function rather than the IoC expression designating it.

        