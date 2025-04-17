---json
{
  "title": "FLUID-4541",
  "summary": "Investigate performance impact of IoC debugging code, create configuration options to disable",
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
  "date": "2011-11-28T01:56:54.024-0500",
  "updated": "2015-06-10T13:48:39.959-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T13:48:39.959-0400",
      "body": "Antranig Basman do we still have debugging code like this in IoC?\n"
    }
  ]
}
---
CollectionSpace is observing extremely slow rendering speeds. Stack traces are mostly full of the "describeActivity" calls inserted to give good IoC tracebacks. Start by providing a configuration option to disable these, and continue to trace down any further performance bottlenecks in the framework.

        