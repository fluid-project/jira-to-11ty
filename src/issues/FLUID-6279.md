---json
{
  "title": "FLUID-6279",
  "summary": "The line-space enactor sets a line-height of 1.2 when line-height is set to normal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-05-03T11:02:42.398-0400",
  "updated": "2024-07-22T10:35:12.723-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "Chrome 66\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The line-space enactor will set the default multiplier to 1.2 ( <https://developer.mozilla.org/en/CSS/line-height> ) when it detects that the initial line-height is set to "normal". However, because the 1.2 is it universally accurate, this may cause some movement of the text on a site when the inline line-height style is set.

This was first noticed on [https://cities.inclusivedesign.ca](https://cities.inclusivedesign.ca/)

When a line-height multiplier is not found we should either not set a line-space style or set it back to what was found in the document (e.g. "normal").

        