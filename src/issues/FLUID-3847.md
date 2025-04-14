---json
{
  "title": "FLUID-3847",
  "summary": "Focus is lost when one of the page links is used to select a page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-18T12:52:44.190-0500",
  "updated": "2010-11-19T12:59:46.787-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "XP+FF3.6, OSX+FF3.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2244/",
      "key": "FLUID-2244",
      "summary": "Pressing tab, after selecting a page, places focus on the first page link"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Primarily a keyboard accessibility issue:\
When the user tabs to a particular page link and then presses Enter to select that page, focus is no longer on that page link. Pressing tab then puts focus back on link #1.

        