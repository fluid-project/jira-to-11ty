---json
{
  "title": "FLUID-6438",
  "summary": "ContextAwareness grades can be applied too late to affect earlier dynamic grades",
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
  "date": "2019-12-04T11:44:45.835-0500",
  "updated": "2024-07-22T10:35:17.105-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6439/",
      "key": "FLUID-6439",
      "summary": "Supply scheme for gradeNames to be supplied as a prioritised hash rather than a simple array"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This issue arose during the reworking of the prefs framework builder for <https://fluidproject.atlassian.net/browse/FLUID-6420#icft=FLUID-6420>, currently in <https://github.com/fluid-project/infusion/pull/967>. In this case, the contextAwareness grade was contributed into fluid.uiOptions from the external driver in the index file at <https://github.com/fluid-project/infusion/blob/7feff39c64a2bbb2f31245c7fbd3edb1761e250a/demos/prefsFramework/index.html>

```java
prefsEditor = fluid.uiOptions(".flc-prefsEditor-separatedPanel", {
                    gradeNames: ["demo.prefsEditor.progressiveEnhancement"],
                    preferences: [
                        "fluid.prefs.textSize",
                        "fluid.prefs.lineSpace",
                        "fluid.prefs.textFont",
                        "fluid.prefs.contrast",
                        "fluid.prefs.tableOfContents",
                        "fluid.prefs.enhanceInputs",
                        "fluid.prefs.letterSpace",
                        "fluid.prefs.wordSpace",
                        "fluid.prefs.syllabification",
                        "demo.prefs.simplify"
                    ],
```

with demo.prefsEditor.progressiveEnhancement as 

```java
fluid.defaults("demo.prefsEditor.progressiveEnhancement", {
        gradeNames: ["fluid.contextAware"],
        contextAwareness: {
            textToSpeech: {
                checks: {
                    supportsTTS: {
                        contextValue: "{fluid.supportsTTS}",
                        gradeNames: "demo.prefsEditor.speak"
                    }
                }
            }
        }
    });
```

From the front, the grade fluid.prefs.auxBuilder is applied as

```java
fluid.defaults("fluid.prefs.auxBuilder", {
        gradeNames: ["fluid.prefs.auxSchema", "{that}.buildAuxiliary"],
        mergePolicy: {
            elementCommonOptions: "noexpand"
        },
        invokers: {
            // An invoker used to generate a set of grades that comprise a
            // final version of the auxiliary schema to be used by the PrefsEditor
            // builder.
            buildAuxiliary: {
                funcName: "fluid.prefs.auxBuilder.buildAuxiliary",
                args: [
                    "{that}.options.indexes.auxSchema",
                    // "{that}.options.preferences"
                    // "{that}.options.prefsPrioritized"
                    "{that}.options.prefsMerged"
                ]
            }
        },
```

which consumes "{that}.options.prefsMerged" whose definition in turn is in 

```java
fluid.defaults("fluid.prefs.builder", {
        gradeNames: [
            "fluid.prefs.primaryBuilder",
            "fluid.prefs.auxBuilder",
            "{that}.applyAssemblerGrades"
        ],
        mergePolicy: {
            preferences: "replace",
            prefsPrioritized: {
                noexpand: true,
                func: fluid.deferredMergePolicy
            }
        },
        invokers: {
            applyAssemblerGrades: {
                funcName: "fluid.prefs.builder.getAssemblerGrades",
                args: ["{that}.options.assemblerGrades", "{that}.options.buildType"]
            }
        },
        buildType: "prefsEditor",
        prefsMerged: {
            expander: {
                funcName: "fluid.prefs.builder.mergePrefs",
                args: ["{that}", "{that}.options.prefsPrioritized"]
            }
        },
```

Unfortunately since "fluid.contextAware" and its associated raw dynamic grade supplied from "{that}.check" has been sorted to the end of the list of grades, this expansion and evaluation of "{that}.options.prefsPrioritized" occurs before the grades from contextAwareness get contributed.

At the least we need to contribute a stop-gap that arranges that, regardless of how the fluid.contextAware grade gets contributed, that its expansion occurs as the very first dynamic grade since this will always been the user's intention - and is consistent with the general framework motivation of maximal discovery of dynamic influence as early as possible.

 

        