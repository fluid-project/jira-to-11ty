---json
{
  "title": "FLUID-4178",
  "summary": "Rules for context resolution scope are unclear and dangerous",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-04-06T22:19:40.294-0400",
  "updated": "2011-07-08T16:21:30.785-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-16T15:42:38.707-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-06-02T23:29:06.175-0400",
      "body": "Restricted resolution rules are now implemented as per the \"YELLOW SQUARES\" diagram at <http://wiki.fluidproject.org/display/docs/Demand+Resolution>\n\nIt is still possible for some non-determinism in resolution but only in some perverse cases where sibling components have demands blocks issued against each other's contexts.\n"
    }
  ]
}
---
As implemented, the rules for context resolution are undesirably generous. The base algorithm searches **every** component which can be reached by a recursive downward traversal from the "path to root" from the component site where the context resolution originates. As well as bringing in undesirably many contexts, this actually makes indeterminism very likely during instantiation - as two siblings may "mutually inhibit" one another by instantiation of children unexpectedly producing contexts. At the very least, to give order to CollectionSpace, we need to inhibit the resolution of "far" contexts. A "far" context is one that is not a DIRECT child of any of the components along the path to root. Further work will be necessary to restore determinism as well as allowing the rules to be overriden by directed "imports" if these are found to be required in some cases. JURA doesn't think there might be any so far.

        