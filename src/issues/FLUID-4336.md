---json
{
  "title": "FLUID-4336",
  "summary": "Detect frequent error of supplying \"events\" configuration to a component which does not have grade of \"eventedComponent\"",
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
  "reporter": "Cindy Li",
  "date": "2011-07-12T16:07:08.452-0400",
  "updated": "2017-02-27T15:49:14.898-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T14:11:11.240-0400",
      "body": "Antranig Basman is this taken care of with <https://github.com/fluid-project/infusion/pull/591>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-09T20:02:10.758-0400",
      "body": "Yes, fluid.eventedComponent has been abolished in that branch\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T21:42:58.272-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Or else abolish the grade of "eventedComponent" entirely.

        