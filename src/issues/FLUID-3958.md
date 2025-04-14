---json
{
  "title": "FLUID-3958",
  "summary": "Validate grid reorderer demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-20T09:47:26.931-0500",
  "updated": "2015-06-09T09:17:46.927-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3930/",
      "key": "FLUID-3930"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T09:17:46.918-0400",
      "body": "Probably fixed with the demo updates\n"
    }
  ]
}
---
Validate <http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/html/gridReorderer.html>\
There are currently 3 errors.

There's a missing closing div, and \<div>s are used instead of \<li>s for the letter list.

[http://validator.w3.org](http://validator.w3.org/)

        