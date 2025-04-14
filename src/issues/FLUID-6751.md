---json
{
  "title": "FLUID-6751",
  "summary": "Unable to distribute expanded or conditional material to component type",
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
  "date": "2022-09-29T08:50:17.610-0400",
  "updated": "2022-09-29T08:50:17.610-0400",
  "versions": [
    "4.4"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To conditionally disable components via distributions for the UIOptions demo, I attempted a few schemes, such as

```java
fluid.defaults("fluid.prefs.panelHolder.selfVoicingIfAvailable", {
    distributeOptions: {
         selfVoicingIfAvailable: {
               target: "{that selfVoicing}.type",
               record: "@expand:fluid.prefs.selfVoicingIfAvailable()"
         }
    }
});
```

or

```java
fluid.defaults("fluid.prefs.panelHolder.selfVoicingIfAvailable", {
    selfVoicingPanelGrade: "@expand:fluid.prefs.selfVoicingIfAvailable()",
    distributeOptions: {
         selfVoicingIfAvailable: {
               target: "{that selfVoicing}.type",
               source: "{that}.options.selfVoicingPanelGrade"
         }
    }
});
```

or perhaps

```java
fluid.defaults("fluid.prefs.panelHolder.selfVoicingIfAvailable", {
    gradeNames: ["fluid.contextAware"],
    contextAwareness: {
        textToSpeech: {
            checks: {
                supportsTTS: {
                    contextValue: "{fluid.supportsTTS}",
                    gradeNames: "fluid.prefs.panel.selfVoicing"
                }
            },
            defaultGradeNames: "fluid.emptySubcomponent"
        }
    }
});
```

None of these succeed in disabling the component via the ancient "fluid.emptySubcomponent" scheme which is only recognised via the "type" field, which it seems is unresponsive to expanders. We should really use a modern lensed/dynamic component system.

        