---json
{
  "title": "FLUID-2837",
  "summary": "If page is long, when opening UI Options, it is below the fold (Sakai Demo)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T22:10:05.000-0400",
  "updated": "2009-06-02T09:45:31.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "XP / IE8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2650/",
      "key": "FLUID-2650",
      "summary": "After changing to the largest font size or line spacing, the dialog will load at the bottom of the page."
    }
  ],
  "attachments": [],
  "comments": []
}
---
I made some changes to the appearance which made the page twice as long as it was.  Then I opened UI Options again.  It opened just above the button "edit appearance" but the page scrolled to the top so I could not see the UI options (it was below the fold).  When the user opens it, they should have it in their focus on the screen.

        