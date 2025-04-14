---json
{
  "title": "FLUID-6345",
  "summary": "Expand available options for contrast themes in the prefs framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-10-09T13:26:37.080-0400",
  "updated": "2024-07-24T13:10:33.236-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6345/current contrasts.png",
      "filename": "current contrasts.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-10-09T13:28:11.285-0400",
      "body": "\"current contrasts.png\" shows the current set of contrast options available by default through the preferences framework.\n"
    }
  ]
}
---
The preference framework provides an option to adjust contrast themes. Initially this was limited to "default", "black on white", "white on black", "black on yellow" and "yellow on black". Later we add a low contrast theme "light grey on dark grey". In work on UIO+ we've added "grey on white" and "black on brown". We'll also be adding a "medium grey on dark grey". There are likely other colours and combinations that a user would like to use as well. We are running out of space in the current design to fit the options, and having something more flexible (e.g. free form entry through colour pickers) would provide more customization by users, although would be more complicated to implement.

        