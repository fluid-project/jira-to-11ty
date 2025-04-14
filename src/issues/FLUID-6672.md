---json
{
  "title": "FLUID-6672",
  "summary": "Initially not able to set ranking to one star",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T14:00:26.661-0400",
  "updated": "2021-07-19T14:22:50.055-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "FF 89 & NVDA 2020.4 (Win 10)\\\nMS Edge 91 & Narrator (Win 10)\\\nSafari 14.1.1 & VoiceOver (macOS 11.4)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1. Open the [keyboard accessibility demo](https://build-infusion.fluidproject.org/demos/keyboard-a11y/)
2. With a screenreader enabled navigate to the list of fruits
3. Select any of the fruits
4. Navigate to the 5 star ranking
5. Try to set a one star ranking with space or enter keys
6. Notice that it won't allow for a 1 star ranking to be set
7. Notice if you select a higher ranking you can switch to one star.
8. Notice that after making a ranking selection, all the other fruits will default to a 1 star being checked.

        