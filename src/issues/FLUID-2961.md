---json
{
  "title": "FLUID-2961",
  "summary": "improve bspace implementation of inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-06-18T15:40:12.000-0400",
  "updated": "2014-03-03T14:28:45.394-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2961/FLUID-2961.txt",
      "filename": "FLUID-2961.txt"
    }
  ],
  "comments": []
}
---
* remove a row button needs to be labelled appropriately, e.g. "remove a row". currently a screen reader will say "true" when the focus is on the remove button.&#x20;
* review the table structure so that a screen reader user is well oriented to the table (ie can know what column/row they're in)

        