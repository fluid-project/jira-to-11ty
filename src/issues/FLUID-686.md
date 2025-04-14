---json
{
  "title": "FLUID-686",
  "summary": "Reorderer: Mouseover boarder applied to all tabs when pointer left over a tab, while using keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-06-02T15:18:13.000-0400",
  "updated": "2008-07-07T17:53:10.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5, WinXP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-686/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-06-02T15:19:04.000-0400",
      "body": "screenshot-1 shows all the tabs with the mouseover styling applied to them\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-07T17:53:10.000-0400",
      "body": "Duplicate of Fluid-132\n"
    }
  ]
}
---
If the mouse pointer is left to hover over a tab, a black border appears around it.

If the moust pointer is left in that position and the user switches to the keyboard interaction, the mouseover border styling will be applied to all tabs that cross the pointer and persist when they move away.

Moving the pointer across the tabs will remove the styling.

In IE7 (WinXP) the styling only occurs on the tab that the mouse was originally over.&#x20;

        