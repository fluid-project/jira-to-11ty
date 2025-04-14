---json
{
  "title": "SJRK-434",
  "summary": "UIO Enhance Inputs not working on block buttons",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-03T15:29:09.965-0500",
  "updated": "2020-12-03T15:29:09.965-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-434/2020-12-02 enhance inputs not working on buttons 1.PNG",
      "filename": "2020-12-02 enhance inputs not working on buttons 1.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-434/2020-12-02 enhance inputs not working on buttons 2.PNG",
      "filename": "2020-12-02 enhance inputs not working on buttons 2.PNG"
    }
  ],
  "comments": []
}
---
The User Interface Options preference for "enhance inputs" does not affect the size of the "add block" buttons, despite indicating that it will "\[e]mphasize links, buttons, menus, textfields, and other inputs".

**To reproduce:**\
1\. Go to <https://staging-stories.floeproject.org/storyEdit.html>\
2\. Click "+ show preferences" at the top-right corner\
3\. Scroll to the rightmost of the UIO panels: "enhance inputs"\
4\. Click the toggle to set the preference to "ON"

**Expected:**\
All of the elements described in the preference's description are larger, including the "add block" buttons in the Editor

**Actual:**\
None of the "add block" buttons nor the Orator component change size (see screenshots)

        