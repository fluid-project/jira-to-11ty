---json
{
  "title": "FLUID-1949",
  "summary": "High contrast orderable tabs springboard: drop marker not visually distinguishable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jacob Farber",
  "reporter": "Anastasia Cheetham",
  "date": "2008-12-09T12:34:45.000-0500",
  "updated": "2011-01-14T09:53:26.814-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1758/",
      "key": "FLUID-1758",
      "summary": "Springboards: No drop target for themed reorderable tabs"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-09T12:36:10.000-0500",
      "body": "Ok, I take it back: The drop marker is not black, it's white. But it's narrow enough that sometimes in my testing, it's not visible. Perhaps it could be a bit wider?\n"
    }
  ]
}
---
In the Reorderer Springboard (...fluid-components/html/Reorderer.html), in the high-contrast reorderable tabs example at the bottom: the drop marker that is supposed to show where the tab will drop is not visible. I'm assuming it's there, since the other tabs seems to move slightly, but I'm guessing it's black, and the tabs are black, so...

        