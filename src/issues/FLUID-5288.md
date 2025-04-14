---json
{
  "title": "FLUID-5288",
  "summary": "Improve error message issued by framework when files holding required grades are corrupt or missing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-03-15T19:53:27.367-0400",
  "updated": "2014-03-18T03:44:49.396-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-03-18T03:44:49.356-0400",
      "body": "I appreciated the long conversation we had in the referenced IRC chat regarding cat pictures. I also appreciate this fix, and as a result I tested and pushed it to to the project repo's master branch at revision de9d5fadc7f15426c714fed3a4e48d2dd00542a0.\n"
    }
  ]
}
---
As discussed in #fluid-work on <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2014-01-07> , the diagnostic issued by the framework where a file holding required parent grades is missing or corrupt is not entirely leading (that is, it is slightly misleading).

Currently it reads, for example,&#x20;

ASSERTION FAILED:  Cannot autoInit component gpii.matchMaker which does not have an initFunction and gradeNames defined

This can be caused by any case where a file holding a parent grade cannot be located by the framework. In this case (for example, <http://issues.gpii.net/browse/GPII-88> ) , it is caused by two copied of infusion being loaded as part of a wider node.js application, leading to some grades being registered with one and some with another. Whilst this specific situation would be hard to diagnose explicitly, we can still reword the message to be more helpful.

I suggest - "The grade hierarchy for component with type gpii.matchMaker is incomplete. This could be caused by a missing or corrupt file holding one of its parent grades. The parent grades for this component have currently been resolved to \[... ..... ] - please check files supplied to this instance of Infusion to ensure they contain proper definitions for these grades"

        