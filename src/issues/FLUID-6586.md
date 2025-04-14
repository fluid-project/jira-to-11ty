---json
{
  "title": "FLUID-6586",
  "summary": "References into local record such as {source} and {sourcePath} can't be resolved in interpolated relay segments",
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
  "date": "2021-01-01T15:01:05.451-0500",
  "updated": "2024-07-17T08:12:45.916-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2022-03-24T06:12:55.267-0400",
      "body": "Would this also explain why `sourcePath` can't be used in a dynamic component's model?  Here's an example:\n\n```java\nfluid.defaults(\"fluid.demo.sourcePath\", {\r\n    gradeNames: [\"fluid.component\"],\r\n    sources: [\"peas\", \"porridge\", \"hot\"],\r\n    dynamicComponents: {\r\n      example: {\r\n        type: \"fluid.modelComponent\",\r\n        sources: \"{that}.options.sources\",\r\n        options: {\r\n          model: {\r\n            label: \"{source}\",\r\n            index: \"{sourcePath}\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  });\n```\n\nThis throws:\n\n```java\nsrc\\framework\\core\\js\\Fluid.js:2972 Uncaught TypeError: Cannot read properties of undefined (reading 'composeSegments')\r\n    at Object.fluid.parseValidModelReference (src\\framework\\core\\js\\DataBinding.js:672:48)\r\n    at Object.fluid.parseImplicitRelay (src\\framework\\core\\js\\DataBinding.js:1284:28)\r\n    at src\\framework\\core\\js\\DataBinding.js:1306:36\r\n    at Object.fluid.each (src\\framework\\core\\js\\Fluid.js:653:13)\r\n    at Object.fluid.parseImplicitRelay (src\\framework\\core\\js\\DataBinding.js:1304:15)\r\n    at src\\framework\\core\\js\\DataBinding.js:1390:22\r\n    at Array.map (<anonymous>)\r\n    at fluid.establishModelRelay (src\\framework\\core\\js\\DataBinding.js:1389:43)\r\n    at Object.fluid.expander.invokeFunc [as typeFunc] (src\\framework\\core\\js\\FluidIoC.js:3512:17)\r\n    at Object.fluid.expandImmediateImpl (src\\framework\\core\\js\\FluidIoC.js:3408:62)\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-05-13T06:07:55.037-0400",
      "body": "Unrelated to the fix of <https://fluidproject.atlassian.net/browse/FLUID-6729#icft=FLUID-6729> since without this feature it would have been impossible to store any {sourcePath} entries at all\n"
    }
  ]
}
---
In a silly oversight, we failed to supply the localRecord argument when expanding interpolating path segments in relay rules. The following definition from the covid data monitor app fails to resolve:

```java
modelRelay: {
                    source: {
                        context: "{map}",
                        segs: ["uiChecks", "{sourcePath}"]
                    },
                    target: "checked"
                }
```

        