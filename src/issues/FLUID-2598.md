---json
{
  "title": "FLUID-2598",
  "summary": "Allow removal of attributes by use of attrs decorator",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Antranig Basman",
  "date": "2009-04-14T14:43:48.000-0400",
  "updated": "2011-02-28T16:45:16.408-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2603/",
      "key": "FLUID-2603"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-14T16:11:34.000-0400",
      "body": "Support for declarative attribute removal committed at revision 7118\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.405-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
It would be useful to be able to use the "attrs" decorator not only to add or change attribute pairs, but also to remove them, or similarly to direct, by means of a value, that an attribute should not be present.

        