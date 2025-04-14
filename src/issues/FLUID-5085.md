---json
{
  "title": "FLUID-5085",
  "summary": "Correct grade merging algorithm to ensure that grade overriding is always effective",
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
  "date": "2013-07-06T03:22:52.716-0400",
  "updated": "2019-12-04T11:45:33.437-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5108/",
      "key": "FLUID-5108"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5800/",
      "key": "FLUID-5800"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5743/",
      "key": "FLUID-5743"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-09-10T00:26:07.651-0400",
      "body": "Merged into trunk at revision 40de4e2\n"
    }
  ]
}
---
In talking to Yura about work on the UIOptions Builder last night it became apparent that there are serious problems with the algorithm currently used for merging graded options. These were signposted by a comment in the implementation for fluid.resolveGradeStructure a few months ago which read:

```java
// TODO: this algorithm will fail if extra grades are mutually redundant and supplied out of dependency order
        // expectation is that stronger grades appear to the left in defaults - dynamic grades are stronger still
```

However, it became apparent that a fundamental aspect of the merging algorithm - that it attempts to cull out "redundant" or "duplicate" specifications of the same grade when it is met multiple times in the hierarchy is incorrect. Furthermore, the mergePolicy which attempts to canonicalise grade lists as they are received is likewise incorrect -&#x20;

```java
gradeNames: fluid.uniqueArrayConcatPolicy,
```

as&#x20;

```java
fluid.uniqueArrayConcatPolicy = function (target, source) {
        target = (target || []).concat(source);
        fluid.unique(target.sort());
        return target;
    };
```

For a start, this should simply be "arrayConcatPolicy", since any reencounter of a grade in the list must be considered deliberate - as well as the "sort" operation causing confusion at the user level, it threatens if these lists should enter options merging proper to corrupt the merging process. So far we have been lucky that i) grade resolution is atomic wrt. options merging and so the mergePolicy has never been activated when resolving a single defaults block, ii) there is special handling of dynamic grades in FluidIoC.js which ensures that their ordering is honoured properly.

However, Yura observed the following gradeNames list:

```java
["autoInit", "fluid.eventedComponent", "fluid.littleComponent", "fluid.tests.properSchemaGrade", "fluid.uiOptions.primaryBuilder", "fluid.uiOptions.schemas", "fluid.uiOptions.schemas.lineSpacing", 
"fluid.uiOptions.schemas.primary", "fluid.uiOptions.schemas.textSize", "{that}.buildPrimary"]
```

which is clearly highly confusing as well as not reflecting the actual merging order, as well as including the unresolved dynamic grade source.

In fact, we must make use of the algorithm which would be O(n^2) without caching - certainly we need the canonicalised list in order to make "hasGrade" calculations, but this was always intended to be implemented by means of a hash for performance in any case. In fact the current cache key system also needs to be corrected, since it assumes that the canonicalised grade content is enough to uniquely specify the required document, whereas in general a component whose grade list is \[A, B, C] does not have the same content as with \[A, C, B].

Some related art is in the so-called "C3 linearization algorithm" <http://en.wikipedia.org/wiki/C3_linearization> which is explained in the context of Python here: <http://www.python.org/download/releases/2.3/mro/> - in fact this is precisely what we do not need, since to us a duplicate grade requires fresh resolution. It is the attempt to be C3 (and by extension, OO-like) which has given rise to this implementation fault in the first place.

        