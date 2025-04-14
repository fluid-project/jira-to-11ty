---json
{
  "title": "FLUID-4338",
  "summary": "Context resolution with respect to member name fails to find components along direct that stack",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2011-07-12T17:35:18.005-0400",
  "updated": "2013-04-11T17:08:53.740-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4",
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
      "date": "2011-11-11T14:50:18.165-0500",
      "body": "Not sure exactly how this was originally observed - since there is **some** tendency to be able to find such components through an exploration of the subcomponents of the parent - that is, to find them on the way DOWN even if you don't find them on the way up. However it was possible to construct a test case for this issue since finding them on the way down will trigger a circularity failure since they are not yet properly attached to the tree and so fail during ginger construction.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-01T04:16:27.802-0500",
      "body": "Delivered for 1.4\n"
    }
  ]
}
---
Although this name could be discovered by inspecting either the instantiator or the next supercomponent, visitComponents always supplies a member name of "" for every component on the direct path to root as a result of the line&#x20;

if (visitor(that, "", options, 0, 0)) {&#x20;

at line 69 of FluidIoC.js

        