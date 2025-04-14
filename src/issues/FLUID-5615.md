---json
{
  "title": "FLUID-5615",
  "summary": "Grade closure algorithm for dynamic grades is faulty in the case of repeated arrival through distribution source before resolving a function source",
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
  "date": "2015-04-05T15:58:20.851-0400",
  "updated": "2017-02-27T15:49:16.482-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5717/",
      "key": "FLUID-5717",
      "summary": "Merge policies contributed via dynamic grades do not operate correctly"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5105/",
      "key": "FLUID-5105"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-07-27T17:46:20.026-0400",
      "body": "Encountered again when writing test case for <https://fluidproject.atlassian.net/browse/FLUID-5717#icft=FLUID-5717> - mildly adjusting the test case so that \"{that}.evaluate\" appears in the direct grade list in the constructor causes it to fail - since the \"raw dynamic grade\" arrives as part of the same batch as the grade defining the invoker (in passes through fluid.expandDynamicGrades' fluid.each(dynamicGrades))\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:11:25.953-0400",
      "body": "Marking as resolved, although a full fix is not possible until we have <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982> async\n\nMerged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-11-04T13:27:16.725-0500",
      "body": "A further recurrence of this when refactoring Kettle's DataSource hierarchy. In this setup\n\n```java\nfluid.defaults(\"kettle.dataSource\", {\r\n    gradeNames: [\"fluid.component\", \"{that}.getWritableGrade\"],\r\n        getWritableGrade: {\r\n            funcName: \"kettle.dataSource.getWritableGrade\",\r\n            args: [\"{that}\", \"{that}.options.writable\", \"{that}.options.readOnlyGrade\"]\r\n        }\r\n}\r\n\r\nkettle.dataSource.getWritableGrade = function (that, writable, readOnlyGrade) {\r\n    if (writable) {\r\n        return fluid.model.composeSegments(readOnlyGrade, \"writable\");\r\n    }\r\n};\n```\n\nwe fail to pick up the \"writable\" flag if it arrives through gradeNames arguments. This further dispatch should really be done via global distributeOptions but the basic problem would remain - how to reliably hoist something out of the world of configuration into gradeNames. We are constantly playing rearguard, but we can still improve the quality of implementation a notch further before we have the full refactor.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-11-05T10:42:06.620-0500",
      "body": "This has been somewhat fixed up in the <https://fluidproject.atlassian.net/browse/FLUID-5615#icft=FLUID-5615> branch. I've realised that there is an implicit contradiction in the goals of the grade closure algorithm which have made it hard to realise (we also need to keep in contact with the C3 goals of <https://fluidproject.atlassian.net/browse/FLUID-5800#icft=FLUID-5800>, <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>). Grade closure needs to CONTINUE TO CLOSE WHILST GRADES ARE ARRIVING - but on the other hand, the algorithm must provably converge, and not become capable of indefinite, not to say arbitrary computation. \\\nA key to realising what the proper convergence criterion should be is in terms of the SOURCES of grade contributions and not in their OUTPUTS. Especially once we have a C3-like model in which grades are deduplicated before resolution, it will be particularly hard to determine whether the trajectory of the grade complement of the instantiating component is stabilising. What we should instead do is to insist that we only consider that we are making progress whilst accumulating input from new SOURCES - which are, sources in the immediate grade hierarchy, direct arguments, raw dynamic grade sources and finally, distributions.\\\nThe first two sources ALWAYS cause AT LEAST ONE new grade to be contributed into the complement - and so progress can be assessed in that way. Options distributions already now have a unique id assigned to them in the registry of distributions - so we should incorporate this information into the closure process and ensure that we only attempt to react to each distribution source once. Finally, for raw dynamic grades, we can continue with our current approach of simply uniquifying on the IoC reference that it is sourced from. These should be rare and it should be perfectly acceptable to expect a different reference to be contributed if a fresh overriding is required.\n"
    }
  ]
}
---
This implementation has been continually improving through reports such as <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>, <https://fluidproject.atlassian.net/browse/FLUID-5108#icft=FLUID-5108>, <https://fluidproject.atlassian.net/browse/FLUID-5155#icft=FLUID-5155>, <https://fluidproject.atlassian.net/browse/FLUID-5169#icft=FLUID-5169>, <https://fluidproject.atlassian.net/browse/FLUID-5245#icft=FLUID-5245> etc but is still faulty (although it can never expect to be perfect, given the ability for grade resolution to trigger the evaluation of options will always create possibility for implementation holes).

A serious kind of fault was uncovered in the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> work, where the new "contextAwareness" implementation is mediated through a standard dynamic grade function reference of the form {that}.check. This expects to be able to read a fully resolved version of the "contextAwareness" options area - unfortunately the then current form of the algorithm took the form of a flat loop, which would evaluate such dynamic grade sources first, before considering other routes such as distributeOptions or the now condemned "grade linkage". This algorithm is held in "fluid.expandDynamicGrades".

We made an "ad hoc" correction by moving the check for distributedGrades up in the loop body, before the expansion of function sources, but this is clearly still faulty. function sources by their nature could only ever be queried once, and must be as a "last-ditch" attempt once all other sources have been recursively exhausted. Therefore this algorithm needs to be expanded into a deeper loop, that queries distributions repeatedly until they cease to arrive, then finally queries function and options sources, then redispatches back to the repeated distribution loop.

This suggests, as has long been suspected, that these other sources of dynamic grades are architecturally suspicious and should be discouraged - and that perhaps we should bake the contextAwareness loop directly into the expandDynamicGrades process - although it is still worth using it as a "canary" to flush out problems with the algorithm.

This recursive closure process seemed suspicious and unthinkable at first, but has eventually emerged as one of the few really decisive achievements of the 2011-2012 framework era since it does genuinely seem to correspond to "what people expect" and now seems to work under a wide variety of scenarios.

        