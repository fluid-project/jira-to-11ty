---json
{
  "title": "FLUID-4986",
  "summary": "Allow use of standard IoC-contextualised EL references from within a renderer component's \"protoTree\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2013-04-24T19:22:05.360-0400",
  "updated": "2017-07-18T11:59:41.469-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-02T17:26:18.076-0400",
      "body": "Merged in to trunk at revision d0f009b\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-13T08:34:36.609-0400",
      "body": "An issue with IoC resolution in uiBound renderer components was resolved at 5053d384ae70d4f479af2e14680b8d62e5a6f270\n"
    }
  ]
}
---
A long-standing grievance against the already awkward "protoComponent" system operated by the renderer expander is that it uses a completely different context system for resolving special strings which appear to be of the same form as the now standard IoC context references that we use elsewhere in configuration. When this system was designed, there was no IoC system and the implementations for resolution diverged somewhat, although sharing some of the same infrastructure.\
In the improved post-FLUID-4330 framework there should now be enough capability in the system to resolve this inconsistency and have any protoComponent references which appear to be contextualised to also bind onto IoC components. There has been a long-standing test in RendererUtilitiesTests.js which appeared to promise this capability but recently has acquired a comment explaining that this was never adequately possible, and the test was only there for illustrative purposes - it should now be possible to convert this to a genuine test - currently its protoTree reads as follows:

```java
protoTree: {
                decorated: {
                    decorators: {
                        type: "fluid",
                        func: "fluid.tests.rendererChild",
                        options: { decoratorValue: "decoratorValue" 
                        // "{rendererParent}.options.parentValue" - this type of reference can no longer be supported at all - 
                        // since FLUID-4129 was resolved, we can no longer fake out the grade resolution system and avoid the
                        // mergePolicy of "noexpand" applied to all protoTree material
                        }
                    }
```

Discussion on this requirement was at <http://wiki.fluidproject.org/display/fluid/fluid-tech+IRC+Logs-2013-04-24> originally in the context of implementing an improvement to the obscure "envAdd" system which allowed a component's styles (only) to be specially resolvable from the protoTreee.

        