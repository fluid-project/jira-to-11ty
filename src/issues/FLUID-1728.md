---json
{
  "title": "FLUID-1728",
  "summary": "Problem with scope handling with respect to forms",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-10-29T11:49:06.000-0400",
  "updated": "2009-06-03T13:45:29.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-29T11:52:26.000-0400",
      "body": "If a form scope was supplied for a set of values, the logical test for scoping inside fluid.value() was inverted, leading to all the correctly scoped values being discarded rather than retained. Fixed at revision 5882 with adjustment to test cases\n"
    }
  ]
}
---
In the renderer, fluid.value() has a bug in scope handling with respect to forms.

        