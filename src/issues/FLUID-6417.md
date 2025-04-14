---json
{
  "title": "FLUID-6417",
  "summary": "When the sliding panel opens the focus is below (after in the tab order) the panel contents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-10-21T10:24:04.961-0400",
  "updated": "2019-10-21T10:24:30.685-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the current setup of the UI Options and the sliding panel in general, the panel is placed at the top of the screen. The user clicks the "show/hide" tab to expand the panel out. The panel opens from the top of the screen with the tab remaining below. The focus remains on the tab, but because it is below the panel it comes after the contents in the tab order. This requires the user to shift-tab back into the panel contents to change their preferences. It would be better if the panel contents were after the panel tab, so that the user could navigate forward into them, but it requires some design change to make things flow logically.

 

Steps to reproduce:

1. Open the [UI Options demo](https://build.fluidproject.org/infusion/demos/uiOptions/)
2. Click the "Show Preferences" tab to open the panel
3. Notice that to enter the panel with the keyboard, you need to shift-tab back.

        