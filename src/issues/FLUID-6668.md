---json
{
  "title": "FLUID-6668",
  "summary": "label not provided for the listbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T11:07:57.011-0400",
  "updated": "2021-07-19T11:07:57.011-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The [Keyboard Accessibility demo](https://build-infusion.fluidproject.org/demos/keyboard-a11y/) uses a listbox to represent the set of images that can be selected. However, there isn't an accessible label provided for it. An aria-label or aria-labeledby should be used to provide an appropriate label.

see: [listbox](https://www.w3.org/TR/wai-aria-1.2/#listbox)

        