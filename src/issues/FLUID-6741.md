---json
{
  "title": "FLUID-6741",
  "summary": "Workflow failure when constructed lensed component from asynchronous resource",
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
  "date": "2022-06-30T09:46:25.863-0400",
  "updated": "2024-07-22T10:35:17.658-0400",
  "versions": [
    "4.1"
  ],
  "fixVersions": [
    "4.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-07-01T09:21:47.507-0400",
      "body": "It looks like this failure is due to the strategy of converting between \"ports\" and \"connectionPort\" via a programmatic modelListener which then fires a manual model change - this is something we would do more routinely in \"old Infusion\" (of the 2.x-3.x era) but prefer to do more declaratively via relays. I verified the issue with a test case looking as so:\n\n```java\nfluid.defaults(\"fluid.tests.fluid6741connector\", {\r\n    gradeNames: [\"fluid.modelComponent\", \"fluid.resourceLoader\"],\r\n    model: {\r\n         connectionPort: null, \r\n         ports: \"{that}.resources.resourceSource.parsed\"\r\n    },\r\n    resources: {\r\n        resourceSource: {\r\n            promiseFunc: \"fluid.tests.resolveLater\",\r\n            promiseArgs: [[1, 2, 3]]\r\n        }\r\n    },\r\n    dynamicComponents: {\r\n        connection: {\r\n            type: \"fluid.modelComponent\",\r\n            source: \"{that}.model.connectionPort\"\r\n        }\r\n    },\r\n    modelListeners: {\r\n        ports: {\r\n            funcName: \"fluid.tests.fluid6741findPort\",\r\n            args: \"{that}\"\r\n        }\r\n    }\r\n});\r\n\r\nfluid.tests.fluid6741findPort = function (that) {\r\n    that.applier.change(\"connectionPort\", that.model.ports[0]);\r\n};\r\n\r\njqUnit.asyncTest(\"FLUID-6741: Lensed components via resource and model listener\", function () {\r\n    var that = fluid.tests.fluid6741connector();\r\n    that.events.onCreate.then(function () {\r\n        jqUnit.assertValue(\"Lensed component should have been constructed\", that.connection);\r\n        jqUnit.start();\r\n    });\r\n});\n```\n\nbut found that if we axe the modelListener in favour of a more idiomatic modelRelay definition like so:\n\n```java\nmodelRelay: {\r\n        portsToconnectionPort: {\r\n            target: \"connectionPort\",\r\n            source: \"ports\",\r\n            func: ports => ports[0]\r\n        }\r\n    }\n```\n\nThe instantiation error goes away. However, the headline issue should still be fixed.\n"
    },
    {
      "author": "Tony Atkins",
      "date": "2022-07-01T10:57:41.611-0400",
      "body": "Is there an example somewhere that uses a modelRelay with the\\` func\\` property?  I didn't see anything in the docs.\n\nAlso, idiomatic or not, the model relay pattern might not be a good fit for all cases.  I only want to pass on the information if conditions are met, i.e. if there is a match among ports for what I would like to connect to.  I haven't seen anything about conditional model relays thus far.\n"
    },
    {
      "author": "Tony Atkins",
      "date": "2022-07-01T13:02:24.700-0400",
      "body": "I suspect that if I understand what you meant by `func` (`singleTransform`?), I can use what I have and simply return the value to be set as part of a relay instead of trying to apply the change myself.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-07-03T05:07:37.783-0400",
      "body": "Yes, that's right, your existing function is admirably suited to being packaged as a simpler and more functional relay rule. If there is no match amongst ports it can simply return undefined or an empty array. Thanks for the ping about docs, I've added a catch-all docs JIRA <https://issues.fluidproject.org/browse/FLUID-6743> for things we need to catch up on. Short-form model relay tests are at <https://github.com/fluid-project/infusion/blob/main/tests/framework-tests/core/js/DataBindingTests.js#L1444-L1542>\n"
    }
  ]
}
---
Encountered as a bare failure in <https://github.com/continuing-creativity/youme/pull/2#issuecomment-1170977935> where a component "connection" is lensed from an asynchronous resource. The failure is 

```java
TypeError: Cannot read properties of undefined (reading 'initModelTransactionId')
    at fluid.enlistModelComponent (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:122208)
    at fluid.establishModelRelay (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:146922)
    at fluid.expander.invokeFunc [as typeFunc] (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:116302)
    at fluid.expandImmediateImpl (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:113546)
    at fluid.expandImmediate (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:113301)
    at fluid.memberFromRecord (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:26913)
    at Array.strategy (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:28140)
    at fluid.model.traverseWithStrategy (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:117256)
    at fluid.model.accessImpl (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:139:15457)
    at fluid.model.accessWithStrategy (http://localhost:7357/node_modules/infusion/dist/infusion-all.js:148:118497)
```

What has happened is that the 3rd component in the transaction, "connection", begins at workflow level 0, "enlistModelComponent" as a result of having its model resource resolve, and since this workflow stage is not marked as "waitIO", the current tree transaction is not restored.

Perhaps this is a good opportunity to eliminate the confusing and probably unperformant heavily promise-based implementation of the workflow system in favour of a priority queue, perhaps the one at <https://stackoverflow.com/a/42919752>

Something is odd, however, since this seems like exactly the case covered by the <https://fluidproject.atlassian.net/browse/FLUID-6390#icft=FLUID-6390> test <https://github.com/fluid-project/infusion/blob/main/tests/framework-tests/core/js/DataBindingTests.js#L1204-L1226> which lenses a tree of components from a resource-backed model, but perhaps the difference is that there is one level of "firebreak" in that the top level of tree containment "levels" is static.

        