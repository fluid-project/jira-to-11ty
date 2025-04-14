---json
{
  "title": "FLUID-4195",
  "summary": "Create new infrastructure for \"subappliers\", applying inverse model calculus to allow broadcast of changes to supermodel",
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
  "date": "2011-04-28T14:37:50.059-0400",
  "updated": "2014-03-03T13:10:27.513-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3674/",
      "key": "FLUID-3674"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4258/",
      "key": "FLUID-4258"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-05-12T03:57:23.859-0400",
      "body": "By correcting a bug in FluidRenderer.js, it was possible to achieve sharing of the direct model state between the cooperating components as in the CSpace case without implementing the functionality described here. As a result, implementation has been pushed out to Infusion 1.5.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-02-20T04:34:02.953-0500",
      "body": "This facility is delivered as part of the <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> new changeApplier, which was merged into trunk at revision 3873109a964f9837c9b6d7c4a81e94ac2a9add11\n"
    }
  ]
}
---
A "submodel" created through the expansion of EL material referring to a wider model (in this case, via renderer variables in an expander) becomes "detached" from the "supermodel" that it is created from - when really we need "writeback" of changes which are issued to the applier via autobinding to occur. This case is required by CSPACE-3905.

        