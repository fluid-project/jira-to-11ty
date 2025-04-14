---json
{
  "title": "FLUID-4211",
  "summary": "Dead Man's Blur fails when user tries to scroll using side scroller even though the rigion is excluded (Chrome, Safari).",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2011-05-09T13:42:43.701-0400",
  "updated": "2011-05-10T10:36:52.561-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "Safari and Chrome (all platforms)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4212/",
      "key": "FLUID-4212"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This seems to be very unfortunate but it appears that some browsers handle mouse scrolling differently in context of dead man's blur. When you exclude a region with dead man's blur your blurable element will not fire blur even if you scroll with mouse within the excluded region in Firefox (clicking and pulling the side scroller). However it is not the case in Chrome and Safari.

        