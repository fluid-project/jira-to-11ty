---json
{
  "title": "FLUID-6744",
  "summary": "Undefined options value causes corruption in options merging",
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
  "date": "2022-07-07T07:29:54.686-0400",
  "updated": "2024-07-17T08:03:27.338-0400",
  "versions": [
    "4.2"
  ],
  "fixVersions": [
    "4.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2022-08-04T13:48:11.087-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1087) is merged at <https://github.com/fluid-project/infusion/commit/bb7d09d84b38984f35bc90043e61093ff7bfb35b>\n"
    }
  ]
}
---
Ordinarily it is not possible for a component's options to hold the value `undefined` but this can be achieved when sourcing subcomponent options wholesale from an undefined source, e.g.&#x20;

```java
dynamicComponents: {
        enactors: {
            sources: "{uiEnhancer}.options.enactorRegistry",
            type: "{source}.type",
            options: "{source}.options"
        }
    },
```

This ends up falling foul of a faulty optimisation written very early into the 2011-era options merging pipeline:

```java
function regenerateSources(sources, segs, limit, sourceStrategies) {
    var togo = [];
    for (var i = 0; i < sources.length; ++i) {
        var thisSource = regenerateCursor(sources[i], segs, limit, sourceStrategies[i]);
        if (thisSource !== undefined) {
            togo.push(thisSource);
        }
    }
    return togo;
}
```

This produces a "sources" array one shorter than the original strategies array and ensure that the last options distribution, whatever it is, will be lost.

For example, with multiple options distributions targetting "gradeNames".

What we have tried to write is

```java
fluid.defaults("fluid.prefs.moduleSyllabificationPattern", {
    gradeNames: "fluid.component",
    // This value and mechanism should become the default
    modulePatternPrefix: "%fluid-infusion/lib/hypher/patterns",
    terms: {
        patternPrefix: "@expand:fluid.resourceLoader.rewritePath({that}.options.modulePatternPrefix)",
    }
});fluid.makeGradeLinkage("fluid.prefs.moduleSyllabificationPatternDistributor", 
    ["fluid.prefs.enactor.syllabification.patterns"], "fluid.prefs.moduleSyllabificationPattern");
```

targetting

```java
fluid.defaults("fluid.prefs.enactor.syllabification.patterns", {
    terms: {
        patternPrefix: "../../../lib/hypher/patterns"
    },
    patterns: {
        be: "%patternPrefix/bg.js",
 ...
```

but note that the "patterns" is plastered onto the enactor itself with 

```java
fluid.defaults("fluid.prefs.enactor.syllabification", {
    gradeNames: ["fluid.prefs.enactor", "fluid.prefs.enactor.syllabification.patterns", "fluid.viewComponent"], 
....
```

and that in the Infusion 5 prefs framework we have

```java
fluid.defaults("fluid.prefs.enactor", {
    gradeNames: ["fluid.modelComponent", "fluid.prefs.withPreferencesMap"],
    prefsMapVariety: "enactor"
});
```

but which we at the same time distributed in via

```java
weaveEnactors: {
            target: "{that fluid.prefs.enactor}.options.gradeNames",
            record: "fluid.prefs.withPreferencesMap"
        }
```

We found that due to the mutation-fest in fluid.makeMergeStrategy that the expanded "targets" were off by one after the first one targetting gradeNames. This can't really be economically resolved until we axe the whole options merging pipeline and go towards an immutable mat-based system for Infusion 6.

        