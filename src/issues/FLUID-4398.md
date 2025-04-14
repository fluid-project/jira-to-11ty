---json
{
  "title": "FLUID-4398",
  "summary": "Implement \"boiled listeners\" to parallel facility for \"boiled events\" to remove messy event binding code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-08-12T00:03:43.883-0400",
  "updated": "2014-03-03T13:03:54.123-0500",
  "versions": [
    "1.4"
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
      "type": "Related to",
      "url": "/browse/FLUID-4337/",
      "key": "FLUID-4337",
      "summary": "Error when resolving listener specified by global name to boiled event"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-03-21T03:17:35.870-0400",
      "body": "This reached the core framework in the mega-merge of Jan 20 2012\\\n<https://github.com/fluid-project/infusion/commit/1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622>\n"
    }
  ]
}
---
"Event boiling" offers a lot of power, but not enough to remove many cases of mess - especially since it requires a new event to be created for each act of "boiling".\
Two very common cases, seen in UIOptions are\
i) a "one-off" listener that requires a custom (IoC-adjusted) signature just for itself\
ii) cases of "relay" where the listener to be attached is one that directly fires to another event elsewhere in the tree, also with modified signature

        