---json
{
  "title": "FLUID-5361",
  "summary": "Model listeners notified by model relay applier do not respect listener priorities",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-05-05T16:32:31.172-0400",
  "updated": "2016-07-08T08:42:43.801-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5695/",
      "key": "FLUID-5695"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-05-06T11:18:17.496-0400",
      "body": "Another possibly related issue with model listeners is, applier.modelChanged.removeListener() stops working.\n\nThe code in this unit test: <https://github.com/cindyli/metadata/blob/FLOE-171/tests/js/audioPanelTests.js#L108-L115> uses model listeners to check the new model state after each click on another audio attribute.\n\nAt line 58, each model listener hooked up for every specific model check was removed immediately after the check so that the same check would not be triggered again. However, the issue is that the removal is no longer successful with the new change applier. The unit test ends up running 6 assertions rather than expected 3.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-28T09:17:20.972-0400",
      "body": "The pull request that fixes this issue (<https://github.com/fluid-project/infusion/pull/520>) has been merged into the project repo @ f77fac2d2d8ecd7fe5ffd2f497cf404e8f13814b\n"
    }
  ]
}
---
The initial implementation of the new ChangeApplier (for the <https://fluidproject.atlassian.net/browse/FLUID-5115#icft=FLUID-5115> model relay system) currently ignores any "priority" field attached to a listener. It wasn't initially clear what the semantic of this field should be given the lack of one-to-one correspondence in the new system between changes and firings, but work on the metadata component revealed at least one clear use case - model listeners added as instrumentation by the IoC testing framework, for example, should definitely be notified after all listeners forming the implementation, otherwise they will see an incompletely updated condition of the model and view state.

This was raised in IRC on 5/5/14  -&#x20;

<https://botbot.me/freenode/fluid-work/msg/14251634/>

The code at this link <https://github.com/cindyli/metadata/blob/FLOE-171/tests/js/resourceInputPanelTestUtils.js#L94> reads

```javascript
generatedSequence.push({
                    listenerMaker: "fluid.tests.checkModelValueByIndex",
                    makerArgs: ["{resourceInputPanel}", config.path, testVal, index],
                    spec: {transactional: true, path: "resources", priority: "last"},
                    changeEvent: "{resourceInputPanel}.applier.modelChanged"
                });
```

despite the attempt to push the listener to the last place, it ends up being notified before the "updateModel" listener in the implementation.

        