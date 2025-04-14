---json
{
  "title": "FLUID-6213",
  "summary": "Subcomponents directly contributed via event arguments to a dynamic component are destroyed if it has a dynamic grade",
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
  "date": "2017-10-17T17:20:15.719-0400",
  "updated": "2024-07-22T09:02:00.305-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-10-20T16:35:19.447-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/855) has been merged into the project repo master branch at 17fbd6f293180320c083295a08e9727f4a2c3e3f\n"
    }
  ]
}
---
An awkward combination of hacks in the pre FLUID-6148 framework have conspired to produce a dreadful result. If a "totally dynamic component", e.g. with the stereotypical definition

```java
dynamicComponents: {
        embranglements: {
            createOnEvent: "createEmbranglement",
            type: "{arguments}.0.type",
            options: "{arguments}.0.options"
        }
    },
```

has had subcomponent definitions literally contributed within {{ {arguments}.0.options}}, and the resulting component ends up with a dynamic grade, e.g. by being the target of an options distribution, these subcomponent definitions will be completely destroyed. To add insult to injury, the event firer's own argument objects will be corrupted by this process.

The blunder is a combination of our existing crude attempts to deal with <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028> by the cursed utility "destroyValue", and our special-casing of "total options arguments" in fluid.makeExpandOptions:

```java
else { // these init immediately since we must deliver a valid root target
            options.strategy = fluid.concreteTrundler;
            options.initter = fluid.identity;
            if (typeof(source) === "string") {
                options.target = options.expandSource(source);
            }
            else {
                options.target = source;
            }
        }
```

In this case "expandSource" will create a mergeBlock target which is not only aliased to the object reference of source, but also one which cannot magically regenerate if it is damaged by fluid.destroyValue.

People have been writing these "total options arguments" for a while even though we have hoped that the use cases for them will go away. It seems at least that the target will agree in terms of expansion count with other material which is always a worry.

        