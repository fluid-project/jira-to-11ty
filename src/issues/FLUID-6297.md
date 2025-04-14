---json
{
  "title": "FLUID-6297",
  "summary": "Add low contrast themes to contrast preference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-07-06T10:22:23.830-0400",
  "updated": "2024-07-22T10:35:25.560-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6298/",
      "key": "FLUID-6298"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-07-23T13:19:29.138-0400",
      "body": "Based on conversation from the fluid-work mailing list ( <http://fluid.2324889.n4.nabble.com/Proposal-to-remove-contrast-themes-for-jQuery-UI-tt10411.html> ), I'll be removing the jQuery UI contrast themes in this PR.\n"
    }
  ]
}
---
Currently the prefs framework supports 4 high contrast themes (black on white, white on black, black on yellow, and yellow on black) and one low contrast theme (light grey and dark grey). As part of the work on UIO+ it was requested to add a few more low contrast themes based on Windows themes. ( <https://docs.google.com/document/d/1choXAocN1z_r1rUi2aeWuTqKIWLSB_1YmxhsIESyucI/edit#heading=h.uqdt18grjypx> )

 

Our existing themes use a binary colour scheme. As a first pass, the primary foreground and background colours (as indicated in the low contrast themes above) will be used to create the new low contrast themes. In the future we can enhance these themes with the extra colour options indicated. Additionally, the initial pass at grey on dark will use the existing light grey on dark grey low contrast theme.

 

An additional concern is how we'll fit all of these options into the adjuster. Currently they are laid out horizontally, but there isn't enough space to hold this number of themes.

 

see: <https://issues.gpii.net/browse/GPII-3156>

        