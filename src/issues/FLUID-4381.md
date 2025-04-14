---json
{
  "title": "FLUID-4381",
  "summary": "Styling issues with content simplification demo - jumping items in header bar, etc.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-07-29T04:17:35.062-0400",
  "updated": "2013-04-29T11:15:57.824-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4323/",
      "key": "FLUID-4323",
      "summary": "Content Simplification Demo"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4381/fully-hopped.png",
      "filename": "fully-hopped.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4381/half-hopped.png",
      "filename": "half-hopped.png"
    }
  ],
  "comments": []
}
---
As the attached image shows, there remains a problem with the "bar of 3 links" which is part of the content demo's header, containing the links "Browse all", "OER landscape" and "My items". It generally doesn't appear in the originally designed place, in the pale yellow search bar flush with the bottom edge. As the browser window is narrowed and widened, the 3 items will "tumble" from their position at the top in a wide window, to something like their correct position when the window is narrowed.\
I am using FF on Windows 7.\
I further tinkered with the markup by applying the green header bar background to a different element since it wasn't showing up in FF at all...

Other issues - in the "content simplification" interface, the panel showing the mapping of simplification levels to descriptions doesn't have the simplification levels properly right-justified in their column the way they appear in the design.

        