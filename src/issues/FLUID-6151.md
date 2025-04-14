---json
{
  "title": "FLUID-6151",
  "summary": "Panel initially opens too much on mobile with lazy loading enabled.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2017-04-13T17:08:58.374-0400",
  "updated": "2017-04-25T15:19:04.760-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5532/",
      "key": "FLUID-5532",
      "summary": "responsive UIO: Fix the current UIO on mobile"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-04-16T21:05:58.005-0400",
      "body": "I spent sometime looking into this today and it seems that the issue has to do with the time it takes to apply the \"OpenSans\" font to the prefs editor; for which the markup has just been injected. If this font-family is not declared in the CSS or a different text style is chosen in the prefs settings, the panel loads correctly.\n\nThis is likely not an issue with the non-lazy loading because it has time to apply the font-family before the panel is shown. So the issue is just not noticed.\n\nOne potential solution would be to not use the OpenSans font for mobile.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-04-25T15:19:04.758-0400",
      "body": "This could only be reproduced on the iOS Simulator, but not on an actual iOS device.\n"
    }
  ]
}
---
When lazy loading is enabled, the initial opening of the responsive separated panel will open too large. It seems that there is an issue with the height calculation of the iframe's document. If a break point is point inside of the `onSignificantDOMChange` event handler in SeparatedPanelPrefsEditor.js, it will work properly.

Steps to reproduce:

1. Open the UI Options demo ( lazyLoading should be enabled by default in this demo )
2. Click "Show Preferences" to open the panel

Notice that the panel opens beyond the height of the adjusters.

        