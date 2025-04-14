---json
{
  "title": "FLUID-6509",
  "summary": "fluid.construct no longer passes on exceptions to its caller",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-05-29T11:45:49.812-0400",
  "updated": "2024-07-18T07:41:50.286-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This issue only affects the in-progress FLUID-6148 branch of the framework.

As part of the FLUID-6148 work, all component construction has become "potentialised" and occurs in transactional units. The native signalling of failures has now been converted from exceptions to promise rejections since it is now possible for component construction to be asynchronous. 

The old fluid.construct signature was "grandfathered in" to return its old payload to avoid disturbing the existing Nexus client, and instead the client signalled that they were aware of the new transactional system by supplying the "returnTransaction" flag in the 3rd argument, indicating that they expected the call to return the full transaction object rather than the single constructed root component as per the previous contract.

However, this has created an API hole - in the case the construction fails, the old-style API invocation simply returns undefined with no means of accessing the failure. We need to provide a similar adaptation as we do in fluid.initFreeComponent to convert the promise rejection back into an exception (in case the construction has failed synchronously) whilst encouraging users to update to the new API form (or even away from the so-called "Nexus API" entirely, in favour of the new potentialised methods fluid.registerPotentia and fluid.commitPotentiae).

This problem was encountered in @@Philip Tchernavskij's work on Nexus-gsheets when invoking fluid.construct via the old Nexus implementation at <https://github.com/fluid-project/infusion-nexus/blob/d576f36a6a1f96337b925c64d66fa4081db76e4b/src/nexusUtils.js#L34>

        