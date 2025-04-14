---json
{
  "title": "FLUID-2282",
  "summary": "OSDPL Tagging: adding tags to uidp type creates bad tag alias URLs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-02-23T10:13:10.000-0500",
  "updated": "2014-04-02T16:35:55.184-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When submitting uidp content with tags, improper URL aliases are being generated.

Example:

1. Created new alias designpatterns/ui-design-pattern-tags/explorer for taxonomy/term/97

URL should be:&#x20;

designpatterns/tags/explorer for taxonomy/term/97

        