---json
{
  "title": "FLUID-6617",
  "summary": "Provide default hover styling for contrast themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-05-04T15:40:30.855-0400",
  "updated": "2021-05-05T09:56:37.091-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently there is no default hover styling provided for contrast themes. Ideally we'd provide some form for the default contrast styles. This might be inverted colours or applying the same styling as the focus styling.

see: [converstation](https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$uz9DVlJrdj9JuTZL62xELoFT2d51dfIWL32ww97zUcU?via=matrix.org) in Fluid General matrix room

Steps to reproduce:

1. Open the [UI Options demo](https://build-infusion.fluidproject.org/demos/uioptions/)
2. Open the preferences panel
3. Apply one of the contrast themes
4. Using the mouse, hover over any of the links in main content area of the demo
5. Notice that there isn't any hover styling.

        