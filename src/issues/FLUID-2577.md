---json
{
  "title": "FLUID-2577",
  "summary": "Renderer performance can be slow on IE 6 and 7 in some contexts.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2009-04-08T18:02:45.000-0400",
  "updated": "2013-09-06T12:24:03.726-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "Internet Explorer 6 and 7 on Windows\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2322/",
      "key": "FLUID-2322"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:24:03.719-0400",
      "body": "IE6 and IE7 are no longer supported browsers.\n"
    }
  ]
}
---
When rendering dense or complex templates or data sets, the Renderer can be sluggish. More optimization and tuning needs to be done over the next couple of releases.

        