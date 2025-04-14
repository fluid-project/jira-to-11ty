---json
{
  "title": "FLUID-6708",
  "summary": "Sourceless relay rule with non-local target causes failure",
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
  "date": "2022-01-06T09:20:48.698-0500",
  "updated": "2022-02-03T10:40:27.817-0500",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-01-06T09:41:19.425-0500",
      "body": "As it turns out the triggering condition is not the non-local source, but the local target. The failure is triggered one level higher up in fluid.parseModelRelay: \n\n```java\nif (transformPackage.refCount === 0) { // There were no implicit relay elements found in the relay document - it can be relayed directly\r\n                // Case i): Bind changes emitted from the relay ends to each other, synchronously\r\n                fluid.connectModelRelay(parsedSource.that || that, parsedSource.modelSegs, parsedTarget.that, parsedTarget.modelSegs,\r\n                // Primarily, here, we want to get rid of \"update\" which is what signals to connectModelRelay that this is a invalidatable relay\r\n                    fluid.filterKeys(transformPackage, [\"forwardAdapter\", \"backwardAdapter\", \"namespace\", \"priority\"]));\r\n            } else {\r\n                if (parsedSource.modelSegs && !shortSingleTransform) {\r\n                    fluid.fail(\"Error in model relay definition: If a relay transform has a model dependency, you can not specify a \\\"source\\\" entry - please instead enter this as \\\"input\\\" in the transform specification. Definition was \", mrrec, \" for component \", that);\r\n                }\r\n                // Case ii): Binds changes emitted from the relay document itself onto the relay ends (using the \"half-transactional system\")\r\n                fluid.connectModelRelay(that, null, parsedTarget.that, parsedTarget.modelSegs, transformPackage);\r\n            }\n```\n\nPutting a non-local reference in target causes us to take branch 2 which then doesn't bomb on a sourceless transform. All seems rather dodgy - of course our model of \"relay documents are relay sources\" is a deep crock.\n"
    }
  ]
}
---
A sourceless relay rule whose target is not the current component causes a failure in fluid.materialiseModelPath. Example was

```java
fluid.defaults("hortis.sunburst", {
....
        tabs: {
            type: "hortis.bagatelleTabs",
            options: {
                modelRelay: {
                   sunburstVisible: {
                        target: "{sunburst}.model.visible",
                        func: tab => tab === "sunburst",
                        args: "selectedTab"
                    }           
                }
            }
        },
```

This is sent into fluid.registerDirectChangeRelay which seems to have a somewhat sloppy test on line 831:

```java
fluid.registerDirectChangeRelay = function (target, targetSegs, source, sourceSegs, linkId, transducer, options, npOptions) {
        var targetApplier = options.targetApplier || target.applier; // first branch implies the target is a relay document
        var sourceApplier = options.sourceApplier || source.applier; // first branch implies the source is a relay document - listener will be transactional
        if (!options.targetApplier) {
            fluid.materialiseModelPath(target, targetSegs);
        }
        if (!options.sourceApplier) {
            fluid.materialiseModelPath(source, sourceSegs);
        }
```

This then gives&#x20;

```java
TypeError: Cannot read property 'length' of null
```

in fluid.matchMaterialiserSpec line 683 since there are no source segments

```java
fluid.matchMaterialiserSpec = function (record, segs) {
        var trundle = record;
        var routedPath = null;
        for (var i = 0; i < segs.length; ++i) {
```

        