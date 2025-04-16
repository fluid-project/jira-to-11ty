---json
{
  "title": "FLUID-3152",
  "summary": "Pager \"root\" selector does not accept some valid jQuery selectors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jen Bourey",
  "date": "2009-09-03T22:25:35.000-0400",
  "updated": "2014-07-11T15:28:39.175-0400",
  "versions": [
    "1.1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3152/test-selector.html",
      "filename": "test-selector.html"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T15:28:39.175-0400",
      "body": "Antranig Basman do you know if this is still an issue?\n"
    }
  ]
}
---
I've found that supplying something like "#oneelement anotherelement" as the "root" selector for the pager results in a "table is undefined" error.  I'll attach a page demonstrating the behavior.

        