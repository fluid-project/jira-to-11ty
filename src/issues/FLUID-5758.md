---json
{
  "title": "FLUID-5758",
  "summary": "No arguments are passed to an expander that is defined within an event listener",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2015-09-10T00:21:22.236-0400",
  "updated": "2017-02-27T15:49:17.606-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It appears that in the current framework, expanders can't be used when they are defined within an event listener record. Arguments to the listener are resolving as undefined via IoC expressions such as "{arguments}.0"

Here's a simple (though hastily-assembled) example that illustrates the problem:

```java
fluid.defaults("test.component", {
        gradeNames: "fluid.component",

        events: {
            onDoIt: null
        },

        listeners: {
            onDoIt: {
                funcName: "test.component.doingIt",
                args: [
                    {
                        expander: {
                            funcName: "test.component.expandValue",
                            args: ["{arguments}.0"]
                        }
                    }
                ]
            }
        }
    });

    test.component.expandValue = function (value) {
        return "Katze " + value;
    };

    test.component.doingIt = function (value) {
        console.log(value);
    };

    var comp = test.component();
    comp.events.onDoIt.fire("Hugo");
```

        