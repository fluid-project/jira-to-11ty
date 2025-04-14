---json
{
  "title": "FLUID-6601",
  "summary": "Supply component proxies to free transforms as well as expanders, etc.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-03-12T11:28:15.100-0500",
  "updated": "2021-06-21T11:30:03.764-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
One of the innovations in the FLUID-6148/FLUID-6580 lineage of Infusion is supplying proxies at least for "whole-component" arguments to expanders which accepts components that have not fully constructed (a partial fulfilment of FLUID-6372).

These really also need to supplied as arguments to transforms, particularly "fluid.transform.free" or the various new implicit forms which accepts arguments which are similarly whole-components. This is particularly pressing since the "new framework" now starts operating relay rules consistently well before components have constructed, and also any attempt to dereference these manually into the argument list falls foul of the fact that the old-fashioned ChangeApplier implementation will attempt to copy them, believing that the entire contents of relay rules are "documents".

We encountered this attempting to update the "bagatelle" biodiversity map visualisation to the new framework, with a definition like

```java
fluid.defaults("hortis.quantiser", {
    gradeNames: "fluid.modelComponent",
....
        index: {
            target: "indexVersion",
            singleTransform: {
                type: "fluid.transforms.free",
                args: ["{that}", "{that}.model.latResolution", "{that}.model.squareSide",],
                func: "hortis.quantiser.indexTree"
            }
        }
    },
```

        