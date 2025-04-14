---json
{
  "title": "FLUID-4680",
  "summary": "Improve IoC context resolution syntax to support explicit reference to \"the same component\" using \"{that}\"",
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
  "date": "2012-03-22T17:09:08.837-0400",
  "updated": "2024-07-22T09:39:14.659-0400",
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
      "author": "Michelle D'Souza",
      "date": "2012-03-29T11:59:52.904-0400",
      "body": "Merged into project repo at b049653db8fb8593d9ee51d76e09c4cd50996150\n"
    }
  ]
}
---
This facility actually appeared briefly in an early version of the framework but ended up getting shuffled out. It is more important at present due to the small number of names that we can use (3) to refer to a component by context name until FLUID-4392 is implemented. Right now in "antification" work for UIOptions (FLUID-4531) it's become crucial to be able to write configuration with more genericity - that is, to write configuration which applies to multiple components with different names and types, but nonetheless allows parts of their IoC configuration to stably refer to "themselves", whatever instance that is.

        