---json
{
  "title": "FLUID-4332",
  "summary": "Unintended instantiation of \"components\" through an invoker erroneously creates instantiator record",
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
  "reporter": "Cindy Li",
  "date": "2011-07-08T15:18:01.465-0400",
  "updated": "2014-03-03T13:06:06.297-0500",
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
      "date": "2013-02-19T14:53:04.708-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
Invocation of a component creator function (that is, one that dispatches to a framework component initialisation function) from within an invoker will attempt to create an instantiator component record. If this is done repeatedly, this will fail as a result of considering the path as dirty. This situation needs to be clarified - either no component record should be created, or this route should result in the creation of genuine components at nonce paths, as is currently done when fluid decorators are encounted as part of a renderer tree by a renderer component.

This error can only be observed when the component creator function itself instantiates a subtree by means of initDependents.

        