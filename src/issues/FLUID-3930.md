---json
{
  "title": "FLUID-3930",
  "summary": "DEMO: Grid reorderer demo missing closing div (fails W3C validation)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2010-12-16T15:56:28.265-0500",
  "updated": "2011-01-13T09:47:20.506-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3958/",
      "key": "FLUID-3958",
      "summary": "Validate grid reorderer demo"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/html/gridReorderer.html>

Opening \<div> on line 38 has no closing tag

        