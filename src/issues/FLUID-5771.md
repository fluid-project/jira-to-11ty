---json
{
  "title": "FLUID-5771",
  "summary": "Can no longer use distributeOptions with components....",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2015-09-25T05:39:11.597-0400",
  "updated": "2024-07-22T09:31:13.854-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-09-25T05:41:32.143-0400",
      "body": "I haven't used this JIRA instance in a while and wanted to point out two things:\n\n1\\.  The wiki markup rendering on this instance is broken, but you should still be able to copy and paste the sample code to see what I mean.\\\n2\\. At mentions are broken (likely a user permissions problem), so I'll have to share this with Antranig manually.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-25T07:31:12.158-0400",
      "body": "I am in meetings all day today and can't give this issue serious attention before tomorrow. However, my first response to the configuration above notes these:\n\ni) a target of \"{that}.components.componentName\" would always be invalid - \"components\" are part of options, not top level material so I can't believe this ever worked. It would have been {that}.options.components.componentName if anything but this still seems meaningless since the effect could only be to construct a fresh, empty component named \"componentName\". I believe what you might be trying to achieve could be achieved by a target of {that componentName}.options.type - but I can't easily understand what is required here.\n\nIt would help enormously rather than constructing placeholders and examples you could paste me a direct link in github to the project where you use a construction like this because I can't grasp what you are trying to do from the description here.\n\nAs for your later example, your attempt to store an entire component in \"options\" doesn't desmonstrate what you say - nothing is being propagated from target to source, there is just confusion resulting from which component the reference options.myComponent actually resolves to when all the component options are resolved. But components must never be stored in \"options\", the results from this are always meaningless. I will raise a JIRA for future versions of the framework to signal an error diagnostic in this situation.\n\nThe only place that references to components can validly be stored in an IoC tree are in the \"components\" section. - e.g.\n\nfluid.defaults(\"my.thing\", {\\\ncomponents: {\\\nmyReference: \"{context}.someOtherComponent\"\\\n}\\\n});\n\nYour reference of myComponent: \"{that}.myComponent\",  is unworkable and if it results in anything, will doubtless just corrupt the component in place during the options merging phase for the parent component. In future I will also ensure to make component options immutable so that early diagnostics result from this.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-25T07:54:55.111-0400",
      "body": "The actual reference is at <https://github.com/the-t-in-rtf/gpii-handlebars/blob/GPII-1284/src/js/client/templateManager.js#L29>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-09-25T08:28:30.303-0400",
      "body": "The use case should have been very familiar, we worked on this repeatedly together.  Regardless, to summarize, I want to inject a single instance of a component into a child component, so that all the child components of a container element that require a renderer use a single renderer which is initialized before the child components are created.\n\nAll of the above were some (but not all) of my attempts to simply inject a component into a child component.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-09-25T10:01:31.791-0400",
      "body": "I cannot edit this issue, IMO it should be repurposed or closed in favor of an issue to detect and reject attempts to distribute components directly.\n\nI ended up meeting the use case by defining and distributing invokers that had access to the component.  You can see the results here:\n\n<https://github.com/GPII/gpii-handlebars/pull/13>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-25T12:53:23.510-0400",
      "body": "Thanks for the report, Tony Atkins \\[RtF] - the use case was familiar, but I couldn't easily identify which of the many use cases that we have covered it was from the description here. I will split this issue into several other JIRAs covering the various usability issues we've uncovered trying to recover this functionality, in particular - \\\ni) It should be impossible to inject a component into another component's options at a general position (that is, to a position other than options.components.\\*)\\\nii) It should be impossible to corrupt a component's options by modifying them after construction\n\nregardless of these usability issues, the original use case should be properly expressible in the framework by distributing a component reference to {context}.options.components.name - if this doesn't work it should be fixed\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-09-25T14:23:04.704-0400",
      "body": "Here is the error when inserting an existing component into another component's options.components:\n\n```java\n// Demonstration of very bad bug in `distributeOptions` when attempting to distribute references to components.\r\nfluid.defaults(\"fluid.sandbox.override.marker\", {\r\n    gradeNames: [\"fluid.component\"]\r\n});\r\n\r\nfluid.defaults(\"fluid.sandbox.override.demo\", {\r\n    gradeNames: [\"fluid.component\"],\r\n    distributeOptions: {\r\n        source: \"{that}.options.components.toDistribute\",\r\n        //source: \"{that}.toDistribute\",\r\n        target: \"{that fluid.sandbox.override.marker}.options.components.toDistribute\"\r\n    },\r\n    components: {\r\n        toDistribute: {\r\n            type: \"fluid.component\"\r\n        },\r\n        toReceive: {\r\n            type: \"fluid.sandbox.override.marker\"\r\n        }\r\n    }\r\n});\r\n\r\nvar demo = fluid.sandbox.override.demo();\r\nconsole.log(\"outer: \", demo.toDistribute.typeName, demo.toDistribute.id);\r\nconsole.log(\"distributed:\", demo.toReceive.toDistribute.typeName, demo.toReceive.toDistribute.id);\n```\n\nThis results in the following stack trace:\n\n```java\n/usr/local/bin/node override.js\r\n19:37:41.621:  Registering module infusion from path /Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion\r\n19:37:41.639:  ASSERTION FAILED: Unrecognised material in place of subcomponent toDistribute - no \"type\" field found\r\n19:37:41.639:  Current activity: \r\n    while instantiating dependent component with name \"toDistribute\" with record {\r\n    \"components\": {\r\n        \"toDistribute\": {\r\n            \"type\": \"fluid.component\"\r\n        },\r\n        \"toReceive\": {\r\n            \"type\": \"fluid.sandbox.override.marker\"\r\n        }\r\n    },\r\n    \"events\": {\r\n        \"onCreate\": null,\r\n        \"onDestroy\": null,\r\n        \"afterDestroy\": null\r\n    }\r\n} as child of {\r\n    \"typeName\": \"fluid.sandbox.override.marker\",\r\n    \"id\": \"107jvqtm-26\",\r\n    \"lifecycleStatus\": \"constructing\",\r\n    \"destroy\": { Function\r\n        \r\n    },\r\n    \"options\": {\r\n        \"gradeNames\": [\r\n            \"fluid.sandbox.override.marker\",\r\n            \"fluid.component\"\r\n        ],\r\n        \"components\": {\r\n            \"toDistribute\": {\r\n                \"components\": {\r\n                    \"toDistribute\": {\r\n                        \"type\": \"fluid.component\"\r\n                    },\r\n                    \"toReceive\": {\r\n                        \"type\": \"fluid.sandbox.override.marker\"\r\n                    }\r\n                },\r\n                \"events\": {\r\n                    \"onCreate\": null,\r\n                    \"onDestroy\": null,\r\n                    \"afterDestroy\": null\r\n                }\r\n            }\r\n        },\r\n        \"initFunction\": \"fluid.initLittleComponent\",\r\n        \"argumentMap\": {\r\n            \"options\": 0\r\n        },\r\n        \"events\": {\r\n            \"onCreate\": null,\r\n            \"onDestroy\": null,\r\n            \"afterD .... [output suppressed at 1024 chars - for more output, increase fluid.logObjectRenderChars]\r\n    while instantiating dependent components for component {\r\n    \"typeName\": \"fluid.sandbox.override.marker\",\r\n    \"id\": \"107jvqtm-26\",\r\n    \"lifecycleStatus\": \"constructing\",\r\n    \"destroy\": { Function\r\n        \r\n    },\r\n    \"options\": {\r\n        \"gradeNames\": [\r\n            \"fluid.sandbox.override.marker\",\r\n            \"fluid.component\"\r\n        ],\r\n        \"components\": {\r\n            \"toDistribute\": {\r\n                \"components\": {\r\n                    \"toDistribute\": {\r\n                        \"type\": \"fluid.component\"\r\n                    },\r\n                    \"toReceive\": {\r\n                        \"type\": \"fluid.sandbox.override.marker\"\r\n                    }\r\n                },\r\n                \"events\": {\r\n                    \"onCreate\": null,\r\n                    \"onDestroy\": null,\r\n                    \"afterDestroy\": null\r\n                }\r\n            }\r\n        },\r\n        \"initFunction\": \"fluid.initLittleComponent\",\r\n        \"argumentMap\": {\r\n            \"options\": 0\r\n        },\r\n        \"events\": {\r\n            \"onCreate\": null,\r\n            \"onDestroy\": null,\r\n            \"afterD .... [output suppressed at 1024 chars - for more output, increase fluid.logObjectRenderChars]\r\n    while constructing component of type fluid.sandbox.override.marker with arguments {\r\n    \"0\": {\r\n        \"marker\": {\r\n            \"value\": \"EXPAND\"\r\n        },\r\n        \"localRecord\": undefined,\r\n        \"mergeRecords\": {\r\n            \"distributions\": [\r\n                {\r\n                    \"options\": {\r\n                        \"components\": {\r\n                            \"toDistribute\": {\r\n                                \"components\": {\r\n                                    \"toDistribute\": {\r\n                                        \"type\": \"fluid.component\"\r\n                                    },\r\n                                    \"toReceive\": {\r\n                                        \"type\": \"fluid.sandbox.override.marker\"\r\n                                    }\r\n                                },\r\n                                \"events\": {\r\n                                    \"onCreate\": null,\r\n                                    \"onDestroy\": null,\r\n                                    \"afterDestroy\": null\r\n                                }\r\n                            },\r\n                            \"modelRe .... [output suppressed at 1024 chars - for more output, increase fluid.logObjectRenderChars]\r\n    while instantiating dependent component with name \"toReceive\" with record {\r\n    \"type\": \"fluid.sandbox.override.marker\"\r\n} as child of {\r\n    \"typeName\": \"fluid.sandbox.override.demo\",\r\n    \"id\": \"107jvqtm-17\",\r\n    \"lifecycleStatus\": \"constructing\",\r\n    \"destroy\": { Function\r\n        \r\n    },\r\n    \"options\": {\r\n        \"gradeNames\": [\r\n            \"fluid.sandbox.override.demo\",\r\n            \"fluid.component\"\r\n        ],\r\n        \"distributeOptions\": {\r\n            \"no-namespace-distribution-107jvqtm-16\": {\r\n                \"source\": \"{that}.toDistribute\",\r\n                \"target\": \"{that fluid.sandbox.override.marker}.options.components.toDistribute\",\r\n                \"namespace\": \"no-namespace-distribution-107jvqtm-16\"\r\n            }\r\n        },\r\n        \"argumentMap\": {\r\n            \"options\": 0\r\n        },\r\n        \"initFunction\": \"fluid.initLittleComponent\",\r\n        \"components\": {\r\n            \"toDistribute\": {\r\n                \"type\": \"fluid.component\"\r\n            },\r\n            \"toReceive\": {\r\n                \"type\": \"fluid.sandbox.override.marker\"\r\n            }\r\n        },\r\n        \"events\": {\r\n            \"onCreate\": null,\r\n            \"onDestroy\": null,\r\n    .... [output suppressed at 1024 chars - for more output, increase fluid.logObjectRenderChars]\r\n    while instantiating dependent components for component {\r\n    \"typeName\": \"fluid.sandbox.override.demo\",\r\n    \"id\": \"107jvqtm-17\",\r\n    \"lifecycleStatus\": \"constructing\",\r\n    \"destroy\": { Function\r\n        \r\n    },\r\n    \"options\": {\r\n        \"gradeNames\": [\r\n            \"fluid.sandbox.override.demo\",\r\n            \"fluid.component\"\r\n        ],\r\n        \"distributeOptions\": {\r\n            \"no-namespace-distribution-107jvqtm-16\": {\r\n                \"source\": \"{that}.toDistribute\",\r\n                \"target\": \"{that fluid.sandbox.override.marker}.options.components.toDistribute\",\r\n                \"namespace\": \"no-namespace-distribution-107jvqtm-16\"\r\n            }\r\n        },\r\n        \"argumentMap\": {\r\n            \"options\": 0\r\n        },\r\n        \"initFunction\": \"fluid.initLittleComponent\",\r\n        \"components\": {\r\n            \"toDistribute\": {\r\n                \"type\": \"fluid.component\"\r\n            },\r\n            \"toReceive\": {\r\n                \"type\": \"fluid.sandbox.override.marker\"\r\n            }\r\n        },\r\n        \"events\": {\r\n            \"onCreate\": null,\r\n            \"onDestroy\": null,\r\n    .... [output suppressed at 1024 chars - for more output, increase fluid.logObjectRenderChars]\r\n    while constructing component of type fluid.sandbox.override.demo with arguments {\r\n    \r\n}\r\n19:37:41.642:  FATAL ERROR: Uncaught exception: Assertion failure - check console for more details: Unrecognised material in place of subcomponent toDistribute - no \"type\" field found\r\nError\r\n    at Error.fluid.FluidError (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:173:22)\r\n    at fluid.builtinFail (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:190:15)\r\n    at Object.that.fire (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:1397:40)\r\n    at Object.fluid.fail (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:205:32)\r\n    at Object.fluid.initDependent (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/FluidIoC.js:1290:19)\r\n    at /Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/FluidIoC.js:1346:19\r\n    at Object.fluid.each (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:470:17)\r\n    at Object.fluid.initDependents (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/FluidIoC.js:1345:15)\r\n    at Object.fluid.initComponent (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:2532:19)\r\n    at creator (/Users/duhrer/Source/rtf/fluid-sandbox.local/node_modules/infusion/src/framework/core/js/Fluid.js:1807:30)\r\n\r\nProcess finished with exit code 0\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-27T19:34:29.274-0400",
      "body": "In fact, this facility works fine - now my brain is less fuddled I realise that there was a further error in the original (faulty, but unfortunately supported under the old framework) scheme for distributing the injected component - the record mentioned \"source\" (which is intended to hold an IoC REFERENCE TO OPTIONS) rather than \"record\" (which is intended to hold the actual OPTIONS THEMSELVES). This is a distinction which can easily be missed - as well as a test case for the correct syntax, I have added further diagnostics into the framework to attempt to flag faulty distributions more intelligibly :&#x20;\n\n<https://github.com/fluid-project/infusion/pull/638>\n\ni) Any \"source\" path which doesn't have \"options\" as the first path segment (e.g. source: {that} or source: {that}.componentName which can NEVER be valid) is now flagged\\\nii) Any \"target\" path which doesn't hit a recognised top-level record path (i.e. options, component, type, container, createOnEvent or priority) is flagged (e.g. target: {that}.components can NEVER be valid)\n\nThe pull verifies that\n\ndistributeOptions: { \\\nrecord: \"{that}.componentName\", \\\ntarget: \"{that}.options.components.componentName\" \\\n}&#x20;\n\nas a strategy for achieving the headline effect desired at the top of the JIRA works ok\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-09-28T03:18:59.215-0400",
      "body": "Thanks for clarifying, that explains a lot.  I will prune away my workaround in favor of the correct syntax shortly.\n"
    }
  ]
}
---
Previously, in discussion with Antranig I used \`distributeOptions\` to replace the renderer in each child component with a single renderer provided by a parent grade.  This relied on syntax like:

```java
distributeOptions: {
  source: "{that}.componentName",
  target:  "{that}.components.componentName"
}
```

This syntax no longer works.  In attempting to work around the problem, I assume that storing a reference to the component in the options and then distributing that would work.  The only side effect would be that calls to the component would need to be prefixed with \`options\`.  Here is an example of this approach:&#x20;

```java
// Demonstration of very bad bug in `distributeOptions` when attempting to distribute references to components.
fluid.defaults("fluid.sandbox.override.marker", {
    gradeNames: ["fluid.component"]
});

fluid.defaults("fluid.sandbox.override.waterfall", {
    gradeNames:      ["fluid.component"],
    value:           "parent",
    myComponent:     "{that}.myComponent",
    distributeOptions: [
        {
            source: "{that}.options.value",
            target: "{that fluid.sandbox.override.marker}.options.value"
        },
        {
            source: "{that}.options.myComponent",
            target: "{that fluid.sandbox.override.marker}.options.myComponent"
        }
    ],
    components: {
        myComponent: {
            type: "fluid.component",
            options: {
                value: "parent"
            }
        },
        child: {
            type: "fluid.sandbox.override.marker",
            options: {
                value: "child",
                myComponent: "{that}.myComponent",
                components: {
                    myComponent: {
                        type: "fluid.component",
                        options: {
                            value: "child"
                        }
                    },
                    grandChild: {
                        type: "fluid.sandbox.override.marker",
                        options: {
                            value: "grandchild",
                            myComponent:  "{that}.myComponent",
                            components: {
                                myComponent: {
                                    type: "fluid.component",
                                    options: {
                                        value: "grandchild"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
```

I opened this ticket because in this specific circumstance, distributeOptions works **in reverse**.  The target value is propagated backwards to all recipients.   See the console output below:

```java
waterfall.child.grandChild.options.value
"parent"

waterfall.child.grandChild.options.myComponent.options.value
"grandchild"

waterfall.child.options.myComponent.options.value
"grandchild"

waterfall.options.myComponent.options.value
"grandchild"
```

It seems very much counter to the normal operation of \`distributeOptions\` for information to propagate back from the target to the source, and especially bad for it to hit intermediate targets on the way.

The lack of working component propagation has badly broken gpii-handlebars and is completely blocking my work to be delivered for the face to face.  I will work on a workaround, but would appreciate help with some urgency.

        