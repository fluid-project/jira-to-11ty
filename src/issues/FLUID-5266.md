---json
{
  "title": "FLUID-5266",
  "summary": "Ginger references to subcomponents will force creation of \"createOnEvent\" components before their time",
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
  "reporter": "Antranig Basman",
  "date": "2014-02-05T03:22:49.298-0500",
  "updated": "2015-06-26T10:09:15.918-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-05-21T09:17:59.303-0400",
      "body": "Merged into trunk at revision c93609021fba9c798489df95e35164fd55f5c64a (Dec 10, 2014)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:15.934-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The intention behind the "createOnEvent" annotation applied to a component is that it will be created ONLY on receipt of the event specified. Unfortunately, the oldest "ginger process" code held in fluid.makeGingerStrategy ignores this event annotation and should it receive a ginger reference (expressed by member name) to a component which might be created, will create it on the spot whether it has a "createOnEvent" specification or not.

This algorithm should be corrected to fail with a diagnostic in the case this early creation is requested (we might make an exception for an exact reference to just the subcomponent in question but it's hard to think of a reasonable use case for this).

        