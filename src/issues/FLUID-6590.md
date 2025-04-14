---json
{
  "title": "FLUID-6590",
  "summary": "Implement \"local mergePolicies\" allowing for local control of the disposition of options during merging",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-01-12T10:10:02.523-0500",
  "updated": "2024-07-17T08:12:14.761-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-06-23T09:01:33.571-0400",
      "body": "Note that <https://issues.fluidproject.org/browse/FLUID-6630> reports a case where options overriding occurred the opposite way than desired - material fetch via dynamic grades was required to have lower priority than material written inline in the grade rather than the natural and hardwired framework behaviour of the opposite priority.\n"
    }
  ]
}
---
Various issues (<https://fluidproject.atlassian.net/browse/FLUID-6219#icft=FLUID-6219>, FLUID-5668, <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>, FLUID-5903) have described the need for a feature described as "local mergePolicies" but this has not yet received a dedicated issue.

This feature is required to resolve conundrums such as whether two expanders written at the same path in different overriding grades will both execute and have their output merged, or whether the output of one will wholly replace the output of the other, short-circuiting it.&#x20;

Without a dedicated area for writing directives about the disposition of options, and in particular with the capability for referring to particular definition sites, rather than referring merely the final merged option site, or else all contributing sites equally, the author can't distinguish situations like these.

Going further, we will need a place for holding information about "types" of values and other out-of-band metadata, and so a structured area, isomorphic to the "value domain", holding such metadata, is essential. The existing mergePolicy system is crufty and ad hoc and unsuitable for use other than by framework internals.

        