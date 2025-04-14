---json
{
  "title": "FLUID-4106",
  "summary": "Implement IoC-driven component capability for those created using the Renderer's \"fluid decorator\" function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-02-22T23:10:49.475-0500",
  "updated": "2011-07-08T16:10:57.457-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:23:55.631-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-18T15:14:40.487-0400",
      "body": "This is implemented in 1.4. There are a few anomalies such as <https://fluidproject.atlassian.net/browse/FLUID-4236#icft=FLUID-4236> raised by the fact that the arguments to the decorator function (component creator) behave as if they were literally supplied using \"arguments\" rather than using pseudoarguments.\n"
    }
  ]
}
---
Currently Fluid components created by the renderer using the "decorator" facility are uncontextualised. Their instantiation is a bare call to fluid.invokeGlobalFunction() which does not allow them to participate in any IoC resolution. This is becoming a significant problem in CollectionSpace with the large amounts of work that are being done with component trees in the "RecordEditor". Now that "instantiators" have been implemented as part of the work for FLUID-4055, it is possible to provide framework support for this feature. Previously this was not possible as a result of the synchronisation between the IoC system's instantiating "that stack" and the physical call stack of the Javascript runtime.&#x20;

The renderer will accept two extra parameters, "instantiator" and "parentComponent". If these are detected, a call to fluid.invokeGlobalFunction() being performed on behalf of the "fluid decorator" will be automatically upgraded to a call to the FLUID-4055 version of fluid.initDependent and the fluid component will be constructed as part of the previously existing "instantiation" as if (and actually as) a subcomponent of the nominated parent. This will bring our two primary JSON dialects, programming with renderer trees and IoC trees, into closer convergence - awaiting the final dawn of "RENDERER ANTIGENS" with FLUID-3681.

        