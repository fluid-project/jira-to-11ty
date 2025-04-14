---json
{
  "title": "FLUID-2453",
  "summary": "After saved rich text edit, access to re-editing buggy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T13:45:20.000-0400",
  "updated": "2009-04-14T10:29:49.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "XP. FF3\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2437/",
      "key": "FLUID-2437",
      "summary": "Need to click twice on an editted field to open in edit mode: using FF"
    }
  ],
  "attachments": [],
  "comments": []
}
---
After saving an edit in the rich text editor (inline), clicking the mouse on that edited text does not re-open the text edit window, it just pushes the text down a line and intorduces some odd haighlighting to some of the text. A second click on the now-moved text does open the editor.

        