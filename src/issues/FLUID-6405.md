---json
{
  "title": "FLUID-6405",
  "summary": "IoC Testing Framework expands listeners early even as it expands events late",
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
  "date": "2019-10-02T18:25:32.009-0400",
  "updated": "2024-07-19T08:01:19.964-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6752/",
      "key": "FLUID-6752"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The IoC testing framework includes a "special dispensation" to allow event specifications to make use of IoCSS expressions to refer to components which are not instantiated at the point of executing the test sequence step. Unfortunately it still uses an eager expansion for "listener" as seen in the snippet

```java
fluid.test.decoders.event = function (testCaseState, fixture) {
        var analysed = fluid.analyseTarget(testCaseState, fixture.event, "events");
        var listener = fluid.test.decodeListener(testCaseState, fixture);
```

"analyseTarget" is capable of parsing full selector contexts whereas "decodeListener" will attempt to evaluate the listener there and then.

In writing some test cases for BULBILS, Colin wrote the following

```java
{
                            event: "{app ipcHolder windough}.events.afterShow",
                            listener: "{app ipcHolder ipc}.send",
                            args: ["from main"]
                        },
```

which failed with "Failed to resolve reference {app ipcHolder ipc}.send - could not match context with name app ipcHolder ipc from component { typeName: "electron.tests.ipcTester""

        