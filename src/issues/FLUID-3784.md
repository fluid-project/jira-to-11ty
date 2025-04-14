---json
{
  "title": "FLUID-3784",
  "summary": "The resolved model, deferred expander Test is failing.",
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
  "reporter": "Justin Obara",
  "date": "2010-10-07T08:36:26.559-0400",
  "updated": "2014-03-03T13:41:05.640-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "IoC System"
  ],
  "environment": "Opera 9.6, Safari 3.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:50:11.151-0500",
      "body": "Fixed for the 1.3 release\n"
    }
  ]
}
---
9\. Fluid IoC Tests module: Deferred expander Tests (1, 1, 2)\
2\. Resolved model: Type mismatch at path objects.args.1.items: object to undefined

<http://swarm.fluidproject.org/job/378/>

        