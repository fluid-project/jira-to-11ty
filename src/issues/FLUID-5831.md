---json
{
  "title": "FLUID-5831",
  "summary": "Use of the \"storeType\" option to the prefs builder should displace the default store grade",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2015-12-16T13:19:28.506-0500",
  "updated": "2024-07-22T09:30:36.971-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-12-17T16:56:10.368-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/660> ) into the project repo at e51c67226e2aa7a758e1a2c364d2448dbe947539\n"
    }
  ]
}
---
The prefs editor accepts an option "storeType" which configures the type of preferences store:

<http://docs.fluidproject.org/infusion/development/PreferencesEditor.html#prefseditor-options>

Since we moved to the new framework, the default store grade is held in a contextAwareness block as so:

```java
fluid.defaults("fluid.prefs.store", {
        gradeNames: ["fluid.prefs.dataSource", "fluid.contextAware"],
        contextAwareness: {
            strategy: {
                defaultGradeNames: "fluid.prefs.cookieStore"
            }
        }
    });
```

Without interacting with this block, the storeType option ends up adding to this default grade rather than displacing it.

        