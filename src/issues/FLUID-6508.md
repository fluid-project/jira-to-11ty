---json
{
  "title": "FLUID-6508",
  "summary": "text size, letter spacing and word spacing preferences will push content out of viewport with small screens",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2020-05-28T20:41:46.779-0400",
  "updated": "2020-05-28T20:41:46.779-0400",
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
This issue is initially discovered when integrating UIO into WeCount website.

When using a small screen, increasing the value of text size, letter spacing or word spacing could push texts at both edges out of the viewport. This happens with items on the navigation menu of WeCount website.

As Justin Obara suggested at [here](https://github.com/inclusive-design/wecount.inclusivedesign.ca/issues/248#issuecomment-635688363): In the future we should document some ideas for possible solutions for integrating these preferences while painting the design. It may be that the content needs to extend beyond the borders of the screen/window. Kind of like on a mobile device when you pinch-to-zoom and have to pan around to see everything.

        