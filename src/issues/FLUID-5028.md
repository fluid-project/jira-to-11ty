---json
{
  "title": "FLUID-5028",
  "summary": "Allow set of subcomponents of a component to be responsive to \"changes\" which occur after subcomponent instantiation begins",
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
  "date": "2013-06-03T03:47:28.824-0400",
  "updated": "2017-03-11T22:58:14.577-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4930/",
      "key": "FLUID-4930",
      "summary": "Correct \"ginger world\" algorithm so that it behaves correctly in cases of \"retrunking\" - clarify semantics for full evaluation"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4925/",
      "key": "FLUID-4925",
      "summary": "Implement \"wave of explosions\", eagerly instantiating all component shells before their contents"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5091/",
      "key": "FLUID-5091"
    }
  ],
  "attachments": [],
  "comments": []
}
---
One remaining limitation in the IoC instantiation system is that the start point of instantiating subcomponents is still a definite timing point. In particular, the following workflow is currently impossible - \
i) begin instantiation of parent component\
ii) begin instantiation of subcomponent\
iii) subcomponent contributes a dynamic grade back to its parent designating further subcomponents\
iv) after subcomponent is constructed, instantiation may later continue with the dynamically designated siblings from step iii)

Instead, the set of subcomponents of a component is currently fixed for all time (that is, for the current "ginger fit") at the point it begins. Dynamic grades which have not been seen by this point will not affect the subcomponent set.&#x20;

Lifting this restriction is important to various kinds of configuration flexibility. For example, in the current implementation of the Uploader we still have a "2-component solution" since we can't get the "real uploader" to be sensitive to the context resolution done by its own ProgressiveEnhancer. When shown the current dynamic grades system, Justin\_O remarked, "why can't the Uploader be its own ProgressiveEnhancer", and the problem described in this JIRA is one of the two chief reasons. If the Uploader COULD designate its own ProgressiveEnhancer, the process of its adaptation could be folded into its own instantiation process rather than requiring a 2nd component. With the use of nickNames and distributeOptions, it's possible to paper over this problem almost completely from the point of view of external users, but it remains an implementation complexity and annoyance for implementors and other code readers.

When FLUID-4925 is implemented, it will also need to be made sensitive to this possibility. This problem is also alluded to as part of the long discussion in FLUID-4930 - we need a facility to mark a path as "dirty" or "clean", or at the least have a clear and cheap workflow for only "restarting" on the subcomponent collection when we can detect that the "gradeNames" collection has changed. This facility does appear to violate our "referential transparency" religion in that in theory there is a value ("gradeNames") which does not appear to remain fixed over time - but if we consider that "gradeNames" is morally equivalent to a hash of gradeName to "true" (which in fact we should reimplement it in terms of for efficiency reasons, as long as we can avoid mergePolicy annoyances) and is only observed through the use of "hasGradeName" we could consider that the religion is preserved - from this point of view, "gradeNames" is still only also a structure which evolves additively ("monotonically") as it should - at earlier points in time it could be considered to just be "partially evaluated" (hence the connection with FLUID-4930).

        