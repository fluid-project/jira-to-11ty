---json
{
  "title": "FLUID-6235",
  "summary": "Default merging of expanded options is not consistent...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-01-02T07:20:38.711-0500",
  "updated": "2024-07-22T09:00:28.722-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6219/",
      "key": "FLUID-6219",
      "summary": "Options expansion workflow for defaults is anomalous through performing merging before expansion"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2018-01-03T07:31:19.595-0500",
      "body": "This is a well-known oddity with options expansion and is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-6219#icft=FLUID-6219> - it recently tripped over the ASTEA team. It will be addressed in the framework rewrite after the next one.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-03T09:38:49.825-0500",
      "body": "Thanks, @@Antranig Basman.  I'll close this one as a duplicate.\n"
    }
  ]
}
---
I have recently been working with expanded defaults (for example, defaulting a directory path to a generated subdirectory of a temp directory.  In grades that extend the base grade, I usually want to replace the expanded material with literal options.  This led me to discover a few oddities.  Take a look at this example:

```java
/* eslint-env node */
"use strict";
var fluid = require("infusion");
var my = fluid.registerNamespace("my");

fluid.registerNamespace("my.base.grade");
my.base.grade.expander = function (payload) {
    return payload;
};

fluid.defaults("my.base.grade", {
    gradeNames: ["fluid.component"],
    // mergePolicy: {
    //     expanded: "nomerge"
    // },
    expanded: {
        object: {
            expander: {
                func: "my.base.grade.expander",
                args: [{ fromBase: true }]
            }
        },
        array: {
            expander: {
                func: "my.base.grade.expander",
                args: [["fromBase"]]
            }
        },
        simpleValue: {
            expander: {
                func: "my.base.grade.expander",
                args: ["fromBase"]
            }
        }
    }
});

fluid.defaults("my.extended.grade", {
    gradeNames: ["my.base.grade"],
    expanded: {
        object: {
            fromExtended: true
        },
        array: ["fromExtended"],
        simpleValue: "fromExtended"
    }
});

var extendedComponent = my.extended.grade();
console.log("Using Options Merging:\n", JSON.stringify(extendedComponent.options.expanded, null, 2));

/*

    Using Options Merging:

    {
        "object": {
            "fromBase": true
        },
        "array": [
            "fromBase"
        ],
        "simpleValue": "fromExtended"
    }

*/

fluid.defaults("my.iocRef.grade", {
    gradeNames: ["my.base.grade"],
    newObject: { fromExtended: true},
    newArray: ["fromExtended"],
    newSimpleValue: "fromExtended",
    expanded: {
        object: "{that}.options.newObject",
        array: "{that}.options.newArray",
        simpleValue: "{that}.options.newSimpleValue"
    }
});

var iocComponent = my.iocRef.grade();
console.log("Using IoC Refs:\n", JSON.stringify(iocComponent.options.expanded, null, 2));

/*

    Using IoC Refs:
    {
        "object": {
            "fromExtended": true
        },
        "array": [
            "fromExtended"
        ],
        "simpleValue": "fromExtended"
    }

*/
```

There may be a very real reason for the base grade to "win" during the expansion and merging process, but the net effect is a bit confusing:

1\. Expanded options from a base grade are simply replaced if they represent a literal value.\
2\. Expanded options from a base grade are not replaced if they are objects or arrays.\
3\. IoC references can be used to replace the underlying expanded options.

If this is the intended behaviour, it should be better explained with an example in the expansion and/or [merge policy docs](https://docs.fluidproject.org/infusion/development/OptionsMerging.html#structure-of-the-merge-policy-object).  For example:

> By default if there is no policy specified, a deep merge is done together with expansion. Firstly, any IoC references and expanders in the source objects will be expanded. Secondly, everything in the source objects are copied over the target object, in a manner very similar to the operation of the jQuery API method $.extend(true, ...). Anything that existed in the target but was not present in any of the source objects will continue to be present in the resulting merged object.

On reading this, I would expect the base grade's options to have been expanded, and then merged with the child grade's options, including resolving IoC references, such that in both child grades `options.expanded.object` would be:&#x20;

```java
{
  fromBase: true,
  fromExtended: true
}
```

The inconsistencies can be mitigated somewhat using merge policies for expanded options, i.e. you can specific a merge policy of "nomerge" that will ensure the "child" grade's options will be used.  However, this does not cover the case above, in which we wish to inherit generated options and merge them with individual options of our choosing.

cc: @@Antranig Basman

        