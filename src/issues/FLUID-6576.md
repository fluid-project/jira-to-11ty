---json
{
  "title": "FLUID-6576",
  "summary": "Overhaul model transformation system",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-11-12T08:59:22.750-0500",
  "updated": "2020-11-12T08:59:22.750-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The very first incarnation of the model transformation system arose in 2010 as a scheme for allowing components to be responsive to outdated versions of their configuration. It was used throughout Fluid Engage as a scheme for transforming document views in CouchDB and then came to its current mature form in the GPII for accounting for different ontologies for expressing user preferences and settings.\
In parallel developments, it has been pressed into service in the modelRelay system developed over the last decade, allowing for parts of models to be put into correspondence by means of transforming relations.\
The model transformation dialect has always been cumbersome for expressing straightforward arithmetic relations, and its two separate kinds of use (for wholesale documents, and for relays) has led to a painful kind of inconsistency in its syntax and semantic. When used for documents, it's imagined that there is a single giant address space for a single document, which is addressible by means of special transform options ending in "Path" e.g.

```java
"STATIC 1\\.magPower": {
                        transform: {
                            "type": "fluid.transforms.linearScale",
                            "inputPath": "http://registry\\.gpii\\.net/common/magnification",
                            "factor": 100
                        }
                    }
```

These kinds of expressions aren't usable in relay definitions, since the relay document parser decodes IoC expressions up front, which constantly causes confusion.

The issue of compactness of expressions is addressed by issues such as FLUID-5894, FLUID-6570 - however, I think that a more fundamental overhaul is required as we start to work more centrally with documents that are contexualised, and also with long-running updates between pairs of documents as per the core diagram on page 6 of the Boomerang manual at <https://www.seas.upenn.edu/~harmony/manual.pdf>

We had always hoped that the document structure of the model transformation specification would naturally support a visual editor for building these, but in retrospect we can see that this was yet another example of the same fallacy that led to "renderer component trees" from 2008 onwards. In practice we can only afford to create infrastructure for one dialect of document, the component trees themselves, and similarly with the renderer, we must plan to dismantle the model transformation system out into the component system.

i) The "xxxxPath" system needs to be eliminated and replaced with a contextual reference system. Since references could be more easily distinguished we can then axe the literalValue system except for the implausible case of strings which take the form of reference.

ii) At the same time we can upgrade the transform syntax so that a transform can accept both source and target, so that we can properly do "putbacks". This implies also fixing the top-level driver so it can accept an already existing target document, in an elaboration of what already happens during relay using the "finalApplier" option.

iii) The FLUID-5894 changes will lead to the elimination of arithmetic lenses and lots of other simple ones.

        