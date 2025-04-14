---json
{
  "title": "FLUID-5504",
  "summary": "Model relay registration triggered by listener registration causes failure",
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
  "date": "2014-09-03T15:26:07.623-0400",
  "updated": "2020-07-30T07:42:48.477-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Data Binder",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-09-13T14:02:36.732-0400",
      "body": "Reviewed, tested and merged.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:06.457-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The following setup:

```java
fluid.defaults("flock.enviro", {
        gradeNames: ["fluid.standardRelayComponent", "flock.nodeList", "autoInit"],
....
        listeners: {
            onPlay: "{audioStrategy}.startGeneratingSamples()",
....
        components: {

            audioStrategy: {
                type: "flock.audioStrategy.platform",
                options: {
                    model: {
                        playState: "{enviro}.model.playState"
                    }
                }
            }
```

where audioStrategy has

```java
invokers: {
            startGeneratingSamples: {
                funcName: "flock.audioStrategy.web.start",
                args: ["{that}.model", ....
```

causes a failure, DataBinding.js line 453 during

```java
var targetApplier = options.targetApplier || target.applier; // implies the target is a relay document
        var sourceApplier = options.sourceApplier || source.applier; // implies the source is a relay document - listener will be transactional
        var applierId = targetApplier.applierId;
```

The workflow is -&#x20;

i) initialisation of enviro reaches "registerListeners" - this observes its child, audioStrategy, and then observes that it has a model section which requires relay to the parent. This then binds ungingerly onto the parent's model and discovers that the applier is absent - since the "last-ditch" construction point is actually during enviro's initDependents which is far in the future. We should fix this simply by making sure that relay performs ginger observation of target's applier before use.

        