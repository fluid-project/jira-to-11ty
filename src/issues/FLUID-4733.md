---json
{
  "title": "FLUID-4733",
  "summary": "Implementation of \"default value merge policies\" is inadequate",
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
  "date": "2012-07-20T17:22:00.096-0400",
  "updated": "2014-03-03T12:50:39.064-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4392/",
      "key": "FLUID-4392",
      "summary": "Possibility for additivity in demands blocks is required so that they can be expressed in a modular way"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4736/",
      "key": "FLUID-4736"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:54:27.293-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
Right now it is possible to specify "EL right hand" merge policies as currently seen in the Reorderer like so:

mergePolicy: {\
keysets: "replace",\
"selectors.labelSource": "selectors.grabHandle",\
"selectors.selectables": "selectors.movables",\
"selectors.dropTargets": "selectors.movables"\
},

the implementation in Fluid.js has a number of problems, for a start, that it has not been updated to consider that the new "policy-based" merge policies are not EL names (Fluid.js line 1231)\
if (typeof (elrh) === "string" && elrh !== "replace" && elrh !== "preserve") {\
however, the need to maintain these names in step with the actual implementation only show the fragility of this mechanism which could never be perfectly sure that a policy name actually represents a policy rather than an EL path. We expect this facility to be completely reimplemented as part of the <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392> work, but in the meantime we should at least deal with this glaring bug.

        