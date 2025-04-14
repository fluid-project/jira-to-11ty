---json
{
  "title": "FLUID-3737",
  "summary": "Fix the hardcoded path that's in myinit.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2010-09-15T17:04:45.224-0400",
  "updated": "2013-10-04T10:21:09.130-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
didn't know how to nicely get the base path from drupal so hardcoded the full ugly path:\
ex sites/dev.inclusivedesign.ca/themes/idi/infusion-1.2/components/tableOfContents/html/TableOfContents.html

        