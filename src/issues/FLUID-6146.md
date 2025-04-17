---json
{
  "title": "FLUID-6146",
  "summary": "Two \"createOnEvent\" components which are triggered by the same event cannot mutually refer",
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
  "date": "2017-03-11T22:37:35.116-0500",
  "updated": "2024-07-22T10:35:28.598-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently there is no sense of "transactionality" in the IoC instantiation process beyond that of being rooted in a single component. As a result, two components which are registered as "createOnEvent" for the same event cannot make reference to each other via IoC references, after the fix to <https://fluidproject.atlassian.net/browse/FLUID-5266#icft=FLUID-5266>.&#x20;

For example, the following setup will fail:

```java
fluid.defaults("examples.creator", {
    gradeNames: "fluid.component",
    events: {
        createIt: null
    },
    components: {
        dynamicOne: {
            createOnEvent: "createIt",
            type: "fluid.component",
            options: {
                value: 3
            }
        },
        dynamicTwo: {
            createOnEvent: "createIt",
            type: "fluid.component",
            options: {
                value: "{creator}.dynamicOne.options.value"
            }
        }
    }
});
```

The firing of the event "createIt" in this case will trigger the <https://fluidproject.atlassian.net/browse/FLUID-5266#icft=FLUID-5266> diagnostic for referring to a "createOnEvent" component before its construction time (in this case, 50% of the time, although the rate could be increased to 100% by creating a cyclic reference). The framework should be able to treat the construction of all components triggered by the same component as a single transactional unit.

This issue was informally reported by Colin Clark some time ago during some implementation work for the Flocking audio synthesis engine.

        