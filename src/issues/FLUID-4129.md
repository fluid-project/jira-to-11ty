---json
{
  "title": "FLUID-4129",
  "summary": "A mergePolicy of \"noexpand\" is not honoured when expanding component options which arrive through IoC-driven subcomponent options",
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
  "date": "2011-03-02T05:26:55.144-0500",
  "updated": "2014-03-03T13:37:17.918-0500",
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
      "type": "Dependence",
      "url": "/browse/FLUID-4330/",
      "key": "FLUID-4330",
      "summary": "Implement \"globally ginger world\" for component instantiation, breaking time dependence of subcomponents on options merging"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-10T22:48:19.691-0500",
      "body": "This issue depends on the work package <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> for the \"globally ginger world\" and we should insure that it is resolved at that time\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:51:42.330-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
The IoC system independently (of main options merging) detects and interprets a mergePolicy of "noexpand" when applied to a path in the component options. However, this policy is only recognised when expanding the options which are registered in a component's **defaults**. The policy is ignored when expanding component options which are specified as a direct member of the "components" section of the parent component. It is in addition ignored when expanding material which arrives from a demands block.

This occurs since component options are expanded "early" in the IoC expansion pipeline - in fact, before the child component in question instantiates at all or has any options resolved, and so any mergePolicy registered cannot be located. A solution to this also interacts with FLUID-3681 work on "grades" - in order to deal with material in demands blocks that do NOT refer to COMPONENT\_OPTIONS (currently rare, but conceivable) we need to understand the ROLE of the parameter in question.

        