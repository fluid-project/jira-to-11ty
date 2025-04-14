---json
{
  "title": "FLUID-2603",
  "summary": "Implement \"removeClass\" decorator, to mirror existence of  \"addClass\" decorator",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Antranig Basman",
  "date": "2009-04-14T16:13:18.000-0400",
  "updated": "2011-02-28T16:45:17.018-0500",
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
      "url": "/browse/FLUID-2598/",
      "key": "FLUID-2598",
      "summary": "Allow removal of attributes by use of attrs decorator"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-14T16:43:50.000-0400",
      "body": "Implemented at revision 7119.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.014-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
The naming of the "addClass" decorator suggests the corresponding presence of the "removeClass" decorator. This feature, along with FLUID-2598, was actually requested in IRC  <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-04-14>

        