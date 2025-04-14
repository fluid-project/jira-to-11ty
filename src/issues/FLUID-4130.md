---json
{
  "title": "FLUID-4130",
  "summary": "Should be possible to incorporate additional material to be merged into component options from demands blocks and elsewhere",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-03-03T01:13:51.836-0500",
  "updated": "2014-03-03T13:14:27.401-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4392/",
      "key": "FLUID-4392"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-03-16T04:10:49.325-0400",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
A common use case in the IoC system is to issue a demands block whose (perhaps only) effect is to override some portion of the component's options with material taken from elsewhere in the tree. Right now this has to be done by hand, and also requires the creation of an entire new component type complete with pasted framework code to perform the merging - cf. various places in CSpace.

        