---json
{
  "title": "FLUID-6390",
  "summary": "Implement enhanced form of dynamic components that will allow components to be \"lensed into existence\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-08-01T10:12:00.445-0400",
  "updated": "2024-07-22T10:35:23.571-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
A long-standing and highly desirable improvement to our rather programmatic "dynamic component" support will allow a group of subcomponents to be put into correspondence with a selection of model material. Updates to the membership of a container in the model will then be automatically reflected in the population of components (and also vice versa, in the case that such a component is destroyed).\
This establishes a kind of "lens" between the model world (actually a kind of potentia II) and the extended world of components (extensa) - following the terminology of the "Queen of Sheba" paper <https://github.com/amb26/papers/tree/master/ppig-2016a> ).\
A convenient way of expressing this would be to reuse the existing dynamicComponents syntax described at <https://docs.fluidproject.org/infusion/development/SubcomponentDeclaration.html#dynamic-components> , but to add recognition if the "sources" element refers to a model path on this or another component. If so, the lifetime correspondence will be set up.\
This will eliminate several highly annoying patterns focusing, for example, on the "DynamicComponentIndexer" which has recurred endlessly in various guises, e.g. <https://github.com/amb26/fluid-authoring/blob/FLUID-4884/src/client/js/DynamicComponentIndexer.js> , a now removed one tracking the GPII LifecycleManager's session components, and at least one other, and eliminate the obviously unsatisfactory asymmetry between the creation process of dynamic components (from data or an event firing) and their destruction via a call to destroy().\
This pattern was appealed to in several of the Infusion-like code samples presented in the EICS 2020 paper on entanglements, readable at <https://github.com/amb26/papers/tree/master/eics-2020> . A fairly complete Infusion treatment of the sample is available at <https://pad.gpii.net/p/cursor-entanglement-sketch-tn2i4nip> with the relevant definition at line 104

This pattern will form a key portion of the new FLUID-5047 renderer, eliminating awkward constructs such as "joint containers".

It seems there will be three main formats for the imaged model material -&#x20;

i) A simple boolean, lensed into construction or destruction of a single component. This might well be signalled by the use of "source" rather than "sources" in the dynamic component record.

ii) An array, lensed into an orderable set of components. We need to consider whether we will retain the existing member name allocation scheme for these components, and arrive at a stable suffix somehow, or alter the layout of the component tree to permit arrays of components to appear as members. The latter seems quite desirable since we will frequently need to lay our hands on a conventional array of components matching the model array. This will also depend on implementing <https://fluidproject.atlassian.net/browse/FLUID-3504#icft=FLUID-3504> support for the new ChangeApplier event types including "INSERT".

iii) A hash, lensed into an either unordered or ordered set of components. Further dynamicComponents record entries may specify a member path providing a key and then further a sort function.

These latter formats will synthesize modelListener definitions which will listen to the "path.\*" form of changes in order to be notified of individual appearance and disappearance of elements. It seems that <https://fluidproject.atlassian.net/browse/FLUID-3504#icft=FLUID-3504> support will need to be made specially aware of INSERT via this route, whereas other forms of listeners will just see the change as an ADD/CHANGE.

        