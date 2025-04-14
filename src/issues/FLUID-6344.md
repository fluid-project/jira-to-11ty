---json
{
  "title": "FLUID-6344",
  "summary": "Inadequate diagnostics when resolving IoC-qualified listener",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2018-10-01T07:27:19.235-0400",
  "updated": "2018-10-01T07:27:19.235-0400",
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
When resolving an IoC-qualified listener such as "{lifecycleManager}.events.onSessionStart" , the diagnostic if the context fails to match is largely unhelpful - taking the form

```java
03:58:56.716:  ASSERTION FAILED: Failed to resolve reference {lifecycleManager} - could not match context with name lifecycleManager from component { typeName: "gpii.app" gradeNames: ["{that}.options.messageDistributorGrade","gpii.app.messageBundles","gpii.app","gpii.app.messageDistributor"] id: 1p4qthxu-1106} at path serverEnvironment-1p4qthxu-161,tests,configuration,server,cloudBasedConfig,server,flowManager,app component: {
    "typeName": "gpii.app",
```

The only error context supplied is

```java
03:58:56.716:  Current activity:
    while constructing component of type gpii.app with arguments {
    "0": {
```

The relevant code path is through

```java
at Object.fluid.expandImmediate (V:\node_modules\infusion\src\framework\core\js\FluidIoC.js:2390:15)
    at V:\node_modules\infusion\src\framework\core\js\Fluid.js:1620:31
    at Object.fluid.each (V:\node_modules\infusion\src\framework\core\js\Fluid.js:523:17)
    at Object.fluid.mergeListeners (V:\node_modules\infusion\src\framework\core\js\Fluid.js:1617:15)
```

which supplies no details on which listener record is being merged, and what the failing reference is. This is a cause behind the difficulty of diagnosing <https://issues.gpii.net/browse/GPII-3409>

        