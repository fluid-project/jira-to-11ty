---json
{
  "title": "FLUID-2462",
  "summary": "[Progress] updatePosition option currently not implemented",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-01T20:00:59.000-0400",
  "updated": "2011-02-22T16:27:42.344-0500",
  "versions": [
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-06-05T14:35:50.000-0400",
      "body": "I think that we're good.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:42.329-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The updatePosition option is left over from a time when I thought that I was going have an optional indicating that the Progress element should be repositioned before each show(). Instead I implemented a RefreshView method.&#x20;

Revisit the idea of this feature, but probably kill the option.&#x20;

        