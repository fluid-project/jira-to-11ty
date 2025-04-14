---json
{
  "title": "FLUID-6667",
  "summary": "Aria usage incorrect, missing group role between listbox and option",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T11:02:05.225-0400",
  "updated": "2021-07-19T11:02:05.225-0400",
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
The aria used for the [Keyboard Accessibility demo](https://build-infusion.fluidproject.org/demos/keyboard-a11y/) is incorrect. The set of images to select from is marked up as role=listbox. Listbox requires child elements with role=option or children whose role=group and have children that are role=option.

The current markup has a \<ul> with role=listbox, the children are \<li>, and the \<li> has an \<img> with role=option.

See: [listbox](https://www.w3.org/TR/wai-aria-1.2/#listbox)

        