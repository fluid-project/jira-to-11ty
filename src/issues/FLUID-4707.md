---json
{
  "title": "FLUID-4707",
  "summary": "Correct IoC context resolution rules to prohibit matches with mismatched context names",
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
  "date": "2012-05-09T03:10:53.865-0400",
  "updated": "2014-03-03T12:53:46.872-0500",
  "versions": [],
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
      "url": "/browse/FLUID-4634/",
      "key": "FLUID-4634"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:53:21.392-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
A necessary fix to the IoC context resolution rules (already partially reformed in FLUID-4178) is to tighten up the matching process so that demands which do not match on ALL names which they require in a particular context are not considered. As part of the FLUID-4178 work they were at least heavily penalised so that they match with a lower priority than any context-free block, as well as definitely requiring a match on at least one name.

Given this will cause widespread upheaval to the semantics of lots of existing demands blocks this should not be done until the wholesale rewrite of <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392>.

        