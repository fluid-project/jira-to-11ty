---json
{
  "title": "FLUID-6464",
  "summary": "Bare failure when referring to \"slow path\" resource before it has been fetched",
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
  "date": "2020-03-05T14:39:05.840-0500",
  "updated": "2020-03-05T14:39:05.840-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In work updating the Nexus to the FLUID-6145 framework, we found at the very least a serious usability failure in the new ResourceLoader interface, and probably a problem which requires that we rethink the approach to signalling expectations on resource readiness in some declarative fashion.

Having written this minimal resource loader,

```java
fluid.defaults("fluid.tests.nexus.writeDefaults.badlyFormedJson", {
    gradeNames: "fluid.resourceLoader",
    resources: {
        corruptJSON: {
            path: "%infusion-nexus/tests/data/corruptJSONFile.jsonx",
            dataType: "text"
        }
    }
});
```

which, as a result of making no early demands on the resource, by default allocated it as "slow". It then became consumed in an IoC Testing Case fixture which attempted to access the value of the resource, at a time after onCreate, but before the resource had loaded:

```java
sequence: [
            {
                func: "{writeDefaultsRequest}.send",
                args: [
                    "{badlyFormedJson}.resources.corruptJSON.resourceText",
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                ]
            },
```

The access to the resourceText of the incomplete resource triggered an extremely offputting message:

```java
11:43:21.520:  FATAL ERROR: Uncaught exception: Cannot read property 'pendingIO' of undefined
TypeError: Cannot read property 'pendingIO' of undefined
    at fluid.resourceFromRecord (E:\source\gits\infusionnexus\node_modules\infusion\src\framework\core\js\FluidIoC.js:1
62:22)
    at strategy (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\FluidIoC.js:196:30)
    at Array.<anonymous> (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\FluidIoC.js:129:20)
    at fluid.model.traverseWithStrategy (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\DataB
inding.js:58:41)
    at Object.fluid.model.accessImpl (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\Fluid.js
:1181:16)
    at Object.fluid.model.accessWithStrategy (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\
DataBinding.js:109:32)
    at Object.fluid.model.getWithStrategy (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\Dat
aBinding.js:84:28)
    at Object.fluid.get (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\Fluid.js:1264:25)
    at Object.fluid.getForComponent (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\FluidIoC.
js:844:26)
    at Object.fluid.expander.fetch [as typeFunc] (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core
\js\FluidIoC.js:3297:30)
    at Object.fluid.expandImmediateImpl (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\Fluid
IoC.js:3259:66)
    at Object.fluid.expandImmediate (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\FluidIoC.
js:3251:15)
    at E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.js:182:26
    at Object.expandFunction (E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.
js:195:28)
    at Object.execute (E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.js:254:
44)
    at Object.fluid.test.execExecutor (E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCT
estUtils.js:536:18)
    at that.execute (E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.js:674:32
)
    at E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.js:340:13
    at wrapped (E:\source\gits\infusion-nexus\node_modules\infusion\tests\test-core\utils\js\IoCTestUtils.js:351:17)
    at fire (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\Fluid.js:1712:40)
    at togo (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\FluidIoC.js:2703:33)
    at fluid.event.firer.fire (E:\source\gits\infusion-nexus\node_modules\infusion\src\framework\core\js\Fluid.js:1712:4
0)
    at Server.<anonymous> (E:\source\gits\infusion-nexus\node_modules\kettle\lib\KettleServer.js:356:30)
    at Object.onceWrapper (events.js:299:28)
    at Server.emit (events.js:215:7)
    at emitListeningNT (net.js:1335:10)
    at processTicksAndRejections (internal/process/task_queues.js:79:21)
11:43:21.554:  Current activity:
11:43:21.555:      while firing to listener to event named onListen of component component { typeName: "kettle.server id
: 8sbw61ac-521" gradeNames: ["kettle.server","kettle.test.server","kettle.server.ws"]} at path serverEnvironment-8sbw61a
c-373.tests.configuration.server
11:43:21.559:  jq: FAIL: Module "fluid.tests.nexus.config tests" Test name "Write Defaults with badly formed JSON" - Mes
sage: Unexpected failure in test case (see following log for more details): Cannot read property 'pendingIO' of undefined
```

At the very least we should replace this with a readable framework diagnostic advising the user to wait for the "onResourcesLoaded" event, but perhaps more so we should revisit our default assumption that a resource should be "slow" which is largely based on backwards compatibility with the Infusion 2.x ResourceLoader behaviour.

        