---json
{
  "title": "FLUID-1696",
  "summary": "rewriteLeafOpen() in fluidRenderer.js has 'failure of falsity'",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-10-20T15:25:49.000-0400",
  "updated": "2009-06-03T13:45:29.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-24T09:06:16.000-0400",
      "body": "Fixed at revision 5790\n"
    }
  ]
}
---
Line 386 of fluidRenderer.js:

if (value)\
replaceBody(value);

is not properly handling empty strings.

        