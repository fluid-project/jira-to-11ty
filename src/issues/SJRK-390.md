---json
{
  "title": "SJRK-390",
  "summary": "Active states for story block buttons do not load with page load, only after selection",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2020-08-26T13:57:52.515-0400",
  "updated": "2020-08-26T14:05:50.299-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Firefox, Safari, Chrome\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-391/",
      "key": "SJRK-391",
      "summary": "Story Tool button active states malfunctioning with keyboard controls"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-388/",
      "key": "SJRK-388"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Active states for story block buttons are inconsistent. On first selection after page load the buttons disappear/reappear when selected (sometimes with a change in colour as well). From then on they just change colour (from green to yellow) which is the desired behaviour (for now). Firefox, Safari, Chrome.

        