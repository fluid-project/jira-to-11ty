---json
{
  "title": "FLUID-4073",
  "summary": "No focus styling for the \"items per page\" dropdown",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-02-17T11:57:18.665-0500",
  "updated": "2013-09-06T12:42:42.381-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": "Safari 5 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the pager demo\
<http://build.fluidproject.org/infusion/demos/pager/html/pager.html>

2\) using the keyboard tap "option-tab" until focus is on the "items per page" dropdown.\
Notice that there is no focus styling applied, but you can interact with the dropdown

        