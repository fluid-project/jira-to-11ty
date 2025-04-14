---json
{
  "title": "FLUID-5893",
  "summary": "Failure to merge dynamic grades supplied to dynamic component by single IoC reference",
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
  "date": "2016-04-19T21:20:12.693-0400",
  "updated": "2016-07-08T09:09:43.535-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-04-20T20:10:51.097-0400",
      "body": "The pernicious irregularity results from the special rule in fluid.makeExpandOptions currently line 2249, which when encountering a plain string block, expands it immediately into \"target\" (presumably since it could never give rise to any kind of ginger re-entrancy):\n\n```javascript\nif (typeof(source) === \"string\") {\r\n                options.target = options.expandSource(source);\r\n            }\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-04-20T20:16:18.087-0400",
      "body": "It appears that the substitution of \"source\" for \"target\" in fluid.computeDynamicGrades was a simple blunder, or perhaps some kind of late-night \"clicko\" attempting to compensate for some other bug that has since been fixed\n"
    }
  ]
}
---
The following definition:

```javascript
fluid.defaults("gpii.express.handlerDispatcher", {
    gradeNames: ["fluid.component"],
    timeout: 5000, // The default timeout we will pass to whatever grade we instantiate.
    events: {
        onRequest: null
    },
    distributeOptions: [{
        source: "{that}.options.timeout",
        target: "{that > gpii.express.handler}.options.timeout"
    }],
    dynamicComponents: {
        requestHandler: {
            createOnEvent: "onRequest",
            type:          "gpii.express.handler",
            // options:       "{arguments}.0"
            options:       {
                gradeNames: "{arguments}.0.gradeNames"
            }
        }
    }
});
```

fails if the commented-out code is substituted for the options actually supplied. There is some strange subtlety with this fault since most other styles for supplying these options work fine, especially since assured and tested by <https://fluidproject.atlassian.net/browse/FLUID-5022#icft=FLUID-5022>. For example, Kettle requests has

```javascript
fluid.defaults("kettle.requests", {
    gradeNames: ["fluid.component"],
    events: {
        createRequest: null // fired by our handler once express determines that route + verb is a match
    },
    dynamicComponents: {
        request: {
            createOnEvent: "createRequest",
            type: "{arguments}.0.type",
            options: "{arguments}.0.options"
        }
    }
});
```

which works fine, as does the definition in the framework test cases which has

```javascript
dynamicComponents: {
            dynamic: {
                createOnEvent: "createIt",
                type: "{arguments}.1",
                options: {
                    gradeNames: "{arguments}.2",
...
```

The failure appears to be due to the awkward hack currently at line 617 of FluidIoC.js, fluid.computeDynamicGrades:

```javascript
fluid.each(shadow.mergeOptions.mergeBlocks, function (block) { // acquire parents of earlier blocks before applying later ones
            gradeNames.push.apply(gradeNames, fluid.makeArray(block.source && block.source.gradeNames));
            fluid.applyDynamicGrades(rec);
        });
```

This faultily reaches into "block.source" rather than going through the front door, and apparently falls foul of the fact that some blocks (e.g. those allocated via fluid.simpleGingerBlock) have no source but only target - although simpleGingerBlock is not  the actual failure route here since the block observed in error was actually of type "subcomponent" (which itself is a little unexpected).

A likely possibility is that the route to the failure cause is the source block being a primitive string, and kettle.requests appears to work because the bulk of the polymorphism is in the "type" field rather than expecting any addon gradeNames in "options" to be resolved.

        