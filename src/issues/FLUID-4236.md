---json
{
  "title": "FLUID-4236",
  "summary": "Merge semantics between renderer decorator-contributed options and demands block-contributed options are unclear",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-05-13T20:22:01.172-0400",
  "updated": "2014-03-03T13:08:18.137-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:52:45.346-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
Accepted a test case from JURA which attempts to issue options BOTH from a renderer decorator&#x20;

mergeComponent: {\
decorators: {\
type: "fluid",\
func: "fluid.tests.mergeComponent",\
options: {\
option: "OPTION1"\
}\
}\
}

and ALSO a demands block:

fluid.demands("fluid.tests.mergeComponent", "fluid.tests.mergeRenderParent", {\
container: "{arguments}.0",\
options: {\
model: "{mergeRenderParent}.model"\
}\
});

The effect with the current framework is that the demands block material wins and the decorator material is discarded completely.

I gave this response:

Thanks JURA... this one is not "clearly" a bug - in that resolution behaviour between renderer decorator options and demanded options was never clear. In particular, demands options generally have the status of "user options" so the situation is as if the user supplied some direct arguments to some component which was then also hit by a demands block... which is of course impossible, since the user would have had to call the function directly and not via IoC 😛 So this behaviour is currently undefined.&#x20;

Whilst these semantics are currently not completely clarified, the desired behaviour can be had using the following "mergeAllOptions" directive. This is able to refer literally to the 2nd argument supplied by the fluid decorator instantiator and hence insert it into the proper position in the merge stack. This is probably not bad since it is best for the user to be clear in this case anyway, since it is not clear which of the two options blocks should be merged first.&#x20;

fluid.demands("fluid.tests.mergeComponent", "fluid.tests.mergeRenderParent", {\
container: "{arguments}.0",\
mergeAllOptions: \[{\
model: "{mergeRenderParent}.model"\
}, "{arguments}.1"]\
});

However, it SHOULD perhaps be possible to refer to the decorator's options as "{options}" which is not currently possible. This reference is potentially ambiguous - however, in the case of a renderer decorator, the other referent of "{options}" which is a subcomponent's direct options supplied in a "defaults" block is not possible, and so it is reasonable to be able to expect to reuse the "{options}" slot for this purpose. This runs the risk of regressing on the "quick fix" to FLUID-4195, where we ensured that model material was not copied when it passed through the renderer decorator pipeline by positioning ALL of it as "direct arguments" in this way.

        