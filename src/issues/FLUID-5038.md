---json
{
  "title": "FLUID-5038",
  "summary": "Tweak scrolling behaviour to match interactions described in wiki",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2013-06-05T14:46:52.851-0400",
  "updated": "2013-10-04T09:05:07.526-0400",
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
See <http://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+Walkthrough%2C+C.1>

Clicking the right arrow button smoothly scrolls the boxes until last overlapped box is first (or to in the closest spot to the left if remaining boxes would not fill full width)

        