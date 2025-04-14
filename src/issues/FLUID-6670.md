---json
{
  "title": "FLUID-6670",
  "summary": "Relationship between fruit and ranking not clear for screen reader users",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-07-19T12:53:04.791-0400",
  "updated": "2024-07-22T10:35:30.861-0400",
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
Steps to reproduce:

* Open the [Keyboard Accessibility](https://build-infusion.fluidproject.org/demos/keyboard-a11y/) demo
* With a screen reader on, navigate to the set of fruit.
* Us the arrow keys to highlight a fruit
* Tab to the ranking.
* Notice that it isn't clear that ranking is for the selected fruit ( press enter or space to select ).

        