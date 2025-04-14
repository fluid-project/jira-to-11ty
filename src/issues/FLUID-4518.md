---json
{
  "title": "FLUID-4518",
  "summary": "Chrome tabs through fat panel even when panel is hidden",
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
  "date": "2011-10-11T16:59:35.258-0400",
  "updated": "2013-10-04T09:34:25.154-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome Win XP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/VP-70/",
      "key": "VP-70",
      "summary": "FatPanel UIOptions in VideoPlayer captures keyboard focus even when closed"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Load <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html> with Chrome and tab to first link on page ("show display prefs") - it takes awhile to get there because it seems to tab through the first tab panel in fat panel first, even when this panel is hidden. Not sure if it's something we can fix?

        