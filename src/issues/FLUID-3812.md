---json
{
  "title": "FLUID-3812",
  "summary": "NVDA reading \"blank\" out loud after editing a field in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2010-10-18T15:36:38.510-0400",
  "updated": "2010-12-08T16:44:07.131-0500",
  "versions": [
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win7, IE8, NVDA 2010.1\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3815/",
      "key": "FLUID-3815"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-20T09:56:44.111-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    }
  ]
}
---
In IE8, after editing a text field NVDA would read:

"\<new edit text> edit blank." (v1.3 demo)\
"\<new edit text> blank." (v1.2.1 demo)

Investigate the cause of the word "blank" and fix.

        