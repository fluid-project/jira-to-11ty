---json
{
  "title": "FLUID-6077",
  "summary": "Modernise support in IoC Testing framework for \"change\" type fixtures",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-11-16T18:56:02.858-0500",
  "updated": "2016-11-16T18:57:14.948-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Our support for issuing changes via the ChangeApplier in the IoC testing framework is rather old-fashioned and has a syntax which dates from before the <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024>/<https://fluidproject.atlassian.net/browse/FLUID-5114#icft=FLUID-5114> model relay rewrite. It still exposes access to the applier's `modelChanged` event which should really be an implementation detail, as in:

```java
{
                listenerMaker: "fluid.tests.makeChangeChecker",
                makerArgs: ["{asyncTester}.options.furtherTextValue", "textValue"],
                // alternate style for registering listener
                spec: {path: "textValue", priority: "last"},
                changeEvent: "{asyncTest}.applier.modelChanged"
            },
```

We should normalise this syntax to conform with the standard one for triggering changes in the new(er) declarative framework as per <http://docs.fluidproject.org/infusion/development/ChangeApplierAPI.html#declarative-style-for-triggering-a-change>

        