---json
{
  "title": "FLUID-5244",
  "summary": "Reserved IoC names silently hide components that have the same name",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2014-01-07T12:02:40.230-0500",
  "updated": "2021-07-29T01:36:11.892-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5761/",
      "key": "FLUID-5761",
      "summary": "Silent failure when subcomponent is given same name as invoker"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-03-15T21:37:32.094-0400",
      "body": "This is a specific bug with respect to \"source\" that we should be able to solve. This context name is treated specially because of the possibility of dynamically created components in response to an event. There would be no problem with a component named \"container\" since this is not a context name with any special meaning in the framework. However, there would be problems with a component named \"arguments\", or, indeed \"that\". It seems reasonable to prevent a component being created with either of these names as a member name or a short nickname. This is a similar issue to <https://fluidproject.atlassian.net/browse/FLUID-5761#icft=FLUID-5761> which is a pretty serious usability failure.\n"
    }
  ]
}
---
In cases where a developer names a component with the same name as an IoC reserved word (such as "source" or "container"), there is no warning or diagnostic to inform that they can't refer to the component in IoC references.

For example:

```java
fluid.defaults("flock.io.osc.source", {
    gradeNames: ["fluid.eventedComponent", "autoInit"],
    
    components: {
        transport: {
            type: "flock.io.serial",

            options: {
                listeners: {
                    onMessage: [
                        {
                            funcName: "flock.io.osc.parseRawOSC",
                            args: ["{arguments}.0", "{source}.events.onOSCMessage.fire"]
                        }
                    ]
                }
            }
        }
    }
});
```

The IoC reference in the onMessage listener to "{source}" will not resolve against the component named "flock.io.osc.source" as the user might expect. In this particularly example, the reference "{source}.events.onOSCMessage.fire" silently resolves to undefined.

Presumably something like this will also fail, where the component name is defined as "source":

```java
fluid.defaults("farm.barn", {
   gradeNames: ["fluid.littleComponent", "autoInit"],
   components: {
       source: {
           type: "farm.cat",
           options: {
               size: "GIANT"
           },
       },

       target: {
           type: "farm.nap",
           options: {
               size: "{source}.options.size"
          }
       }
    }
});
```

Perhaps we need to provide some kind of diagnostic message when a user registers a component in fluid.defaults with a type name ending in one of the reserved word or when they create components with this name?

Alternatively, should we consider some kind of changing the scoping rules for IoC references in some way?&#x20;

        