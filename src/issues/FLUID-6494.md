---json
{
  "title": "FLUID-6494",
  "summary": "Deploy nexus-gsheets on a Nexus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-04-17T14:03:38.127-0400",
  "updated": "2020-04-17T14:03:38.127-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6494/NexusTopology.jpg",
      "filename": "NexusTopology.jpg"
    }
  ],
  "comments": []
}
---
The [nexus-gsheets](https://github.com/fluid-project/nexus-gsheets) library currently provides basic support for externalizing Google sheets documents in Infusion applications. However, we still have not worked out the details of how the provided grades will be deployed.

The attached image is a sketch of an imagined use case, where a Nexus instance running on a server or locally takes care of managing and connecting various remote resources such as spreadsheets and sensors, and a 'regular' Infusion instance running in a browser provides a UI for interacting with the Nexus components.

 

In this sketch, some of the components in the Nexus are mirrored in the browser, so that they can be connected to the UI through Infusion's declarative constructs, i.e. model relays, listeners etc. This mirroring facility is currently missing from the Nexus, though a version of it was implemented for the \[Visible Nexus demo|<https://github.com/amb26/fluid-authoring/blob/FLUID-4884/src/server/js/VisibleNexus.js>.] We should evaluate whether to extend the Nexus API with this feature. Apropos, this is reminiscent of the [Shared Substance middleware](https://hal.archives-ouvertes.fr/hal-00997891/file/chi2011-HAL.pdf), which allows parts of a distributed component tree to be mounted or replicated on multiple machines.

 

In addition to figuring out the network topology of our spreadsheet integration tools, this issue also invites work on the (end-user and developer) workflow for setting up and configuring an integration tool. For example:

* Each user will have to give the API client access to their personal spreadsheets to create a token file authorizing the client. How does the Nexus communicate with the browser to represent this exchange? Can we store a token on the browser, so users don't transmit their consent to our server?
* Currently, there is no declarative/static mechanism to package a Nexus with a set of custom grades. Should we extend the Nexus with a system a la Kettle's capacity for static configuration files?

        