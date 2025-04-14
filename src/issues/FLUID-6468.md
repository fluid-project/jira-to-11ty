---json
{
  "title": "FLUID-6468",
  "summary": "Failure in gingerness when fetching nested injected component reference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-03-09T18:21:29.458-0400",
  "updated": "2024-07-19T07:40:03.907-0400",
  "versions": [],
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
This issue only affects the in-progress FLUID-6148 branch.

The new framework believes it can be blasé about ordering of component fetches, given we now construct component shells aggressively first, and thinks it can do without the ancient "per-component" ginger strategy - but it can't.

The following setup in the Nexus Co-Occurrence engine attempts to fetch a nested component of a sibling:

```java
fluid.defaults("fluid.nexus.coOccurrenceEngine", {
    gradeNames: ["fluid.component"],
    components: {
        recipesContainer: "{fluid.nexus.coOccurrenceEngine}.componentRoot.recipes",
    },
```

in the testing environment for CoOccurrenceEngineTests.js, componentRoot is itself defined as an injection:

```java
type: "fluid.nexus.coOccurrenceEngine",
            options: {
                components: {
                    componentRoot: "{coOccurrenceEngineTestEnvironment}.componentRoot"
                },
```

Now, shell construction not withstanding, we clearly can't evaluate these injections in any order. If we evaluate the one in the coOccurrenceEngine itself first, we end up with undefined, rather than the test engine's root as required.

The relevant code is currently in fluid.operateCreatePotentia - 

```java
fluid.operateCreatePotentia = function (transRec, potentiaList, potentia) {
....
        if (lightMerge.isInjected) {
            parentThat[memberName] = fluid.inEvaluationMarker; // support FLUID-5694
            var instance = fluid.fetchInjectedComponentReference(transRec, potentiaList, lightMerge.toMerge[0].injected, parentThat);
```

A pretty awkward scheduling problem since we are now already committed to "constructing" the component. We might have to move this back up to fluid.processComponentShell at the point the lightMerge is first evaluated - or else exploit the pathToPotentia structure that we thankfully have in order to execute the traditional lazily implemented toposort.

Look at the comment on fluid.operateOneCreatePotentia - it looks like this has already been partially anticipated!

```java
// Tightly bound to commitPotentiaePhase - broken out as a function so that we can call it from
    // fluid.fetchInjectedComponentReference for out-of-order construction.
    fluid.operateOneCreatePotentia = function (transRec, potentia) {
```

        