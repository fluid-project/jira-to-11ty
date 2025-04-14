---json
{
  "title": "FLUID-4563",
  "summary": "Implement caching for core framework facilities of grade and demands resolution",
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
  "date": "2011-11-30T02:33:30.821-0500",
  "updated": "2024-07-22T09:40:40.611-0400",
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
      "type": "Related to",
      "url": "/browse/FLUID-4705/",
      "key": "FLUID-4705",
      "summary": "Remove \"trundlers\" from the framework in favour of universal flat schema system"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-01-20T16:49:47.789-0500",
      "body": "Merged into the project repo at 1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622 with several framework change issues:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4525#icft=FLUID-4525>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4537#icft=FLUID-4537>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4539#icft=FLUID-4539>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4564#icft=FLUID-4564>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-05-07T04:26:04.173-0400",
      "body": "Note that a part of this work in practice involved shifting \"trundlers\" out of the core framework as an early part of the work for <https://fluidproject.atlassian.net/browse/FLUID-4705#icft=FLUID-4705>\n"
    }
  ]
}
---
The biggest performance bottleneck identified so far for FLUID-4541 has been excessive invocations of options merging in the framework, caused by repeated resolution of grades for framework classes (such as viewComponent) etc., as well as repeated calls to locateAllDemands during demands resolution. Given that the semantics of both of these facilities are intended to be static (that is, it should not be possible to see a different grade chain or complete demands set for a particular name, after the first resolution for that name), it would be a considerable performance improvement as well as a useful enforcement of semantic to cache the results of these lookups in the framework.&#x20;

        