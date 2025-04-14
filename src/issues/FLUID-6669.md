---json
{
  "title": "FLUID-6669",
  "summary": "JAWS announces to use the up/down arrow for changing the rank but left/right arrow keys required",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T12:50:27.245-0400",
  "updated": "2021-07-19T12:50:27.245-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "Chrome 91 & JAWS 2021 (Win 10)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1. Open the [Keyboard Accessibility Demo](https://build-infusion.fluidproject.org/demos/keyboard-a11y/)
2. With JAWS running, move focus to the star ranking widget
3. Notice that JAWS announces to use the up/down arrows. However, only the right/left arrows work for navigating between the star rankings.

This is likely because the star ranking is marked up as a set of radio buttons, but layed out horizontally.

        