---json
{
  "title": "FLUID-6710",
  "summary": "Remove versioned globals and file guards from the framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-01-26T13:37:24.241-0500",
  "updated": "2022-02-03T17:16:59.958-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-01-27T09:55:36.835-0500",
      "body": "Some [discussion](https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$vF9LHcugAAj_k4LJ5xN-90lWX2gjHb6Lv1OBmRoCiEg?via=matrix.org) on the reasoning from the Fluid Tech matrix channel.\n\n \n\n* Switching to ES6 modules in the future\n* Infusion expects a single component tree\n* Potentially more risks in the node vs browser environment\n* Need to cut scope\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-02-03T17:16:54.688-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1069> ) into the project repo at 466f09760ca4a8984a56ad37f6abd526287cee12\n"
    }
  ]
}
---
We have determined it is best to remove our specially versioned globals and file guards from the framework and components. These were originally introduced to allow multiple versions of Infusion to coexist on the same page, which isn't practical any more for a number of reasons, as well as being a feature (originally requested by the uPortal community in 2008) which hasn't been in use for many years.

Removing these will enable us to be much more nimble with making standardly versioned releases since we will no longer need to update every file's global which has the form, e.g.&#x20;

```java
var fluid_4_0_0 = fluid_4_0_0 || {}; // eslint-disable-line no-redeclare
var fluid = fluid || fluid_4_0_0; // eslint-disable-line no-redeclare

(function ($, fluid) {
```

which would otherwise churn every file even for a point release.

Another benefit is somewhat reducing the final minified filesize of the delivered framework.

If this feature were required again, it would best be reimplemented as part of our build process.

        