---json
{
  "title": "FLUID-5835",
  "summary": "Deduplication of distributions by namespace destroys extra blocks sharing distribution",
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
  "date": "2015-12-25T08:45:31.092-0500",
  "updated": "2016-01-15T12:00:33.696-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-01-15T12:00:31.163-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/654> ) into the project repo at 4e1b8c9a64665c67232901d2e57531926ec7247f  and 2f38c09d733925441f0ff2e6636f8886da8af5ea\n"
    }
  ]
}
---
Our fix for FLUID-5824 has too aggressively deduplicated the distributions at target. The failure symptom is in resolving an overridden message bundle in BuilderTests.js - as reported on <https://github.com/fluid-project/infusion/pull/654> , the failure is:

The composite panel should be rendered correctly - at sequence position 1 of 5\
Expected: "increase"\
Result: "\[Message string for key increaseHeader not found]"\
Diff:

The setup here is rather subtle. As a direct override we have, in BuilderTests.js,&#x20;

```java
fluid.defaults("fluid.tests.composite.increase", {
        gradeNames: ["fluid.prefs.compositePanel"],
        messageBase: {
            increaseHeader: "increase"
        },
```

Then, as a subcomponent override, we have, arising from within the guts of AuxBuilder.js, a definition which results in:

```java
....
    components: {
        increasing: {
            container: "{prefsEditor}.dom.increasing",
            createOnEvent: "onPrefsEditorMarkupReady",
            options: {
                gradeNames: "fluid.prefs.prefsEditorConnections",
                messageBase: "{messageLoader}.resources.increasing.resourceText"
```

NOW, what then happens is that we attempt to distribute the "messageBase" property to the panel to the rather awkwardly defined "fake" message bundle named "msgBundle" - from Panels.js:

```java
fluid.defaults("fluid.prefs.panel", {
        gradeNames: ["fluid.prefs.msgLookup", "fluid.rendererComponent"],
        distributeOptions: {
            source: "{that}.options.messageBase",
            target: "{that > msgResolver}.options.messageBase"
        }
```

What happens here is that the BLOCKS constituting the component's protoOptions pass through FluidIoC.js "filterBlocks", which then gives rise to two blocks sharing the same distribution namespace (in this case the automatically allocated "no-namespace-distribution-mc87fiq-27"). Only one of these survives - the one of record type "subcomponentRecord" which resolves messageBase to undefined, losing the one arising from the defaults override in the test case completely.

Examining this pathway suggests that the "source" scheme for distributeOptions is really rather rickety and that even after reverting this regression, we can expect many other kinds of failure of this kind to arise over time - JIRAed separately at <https://fluidproject.atlassian.net/browse/FLUID-5836#icft=FLUID-5836>

        