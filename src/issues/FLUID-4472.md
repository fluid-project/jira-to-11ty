---json
{
  "title": "FLUID-4472",
  "summary": "Rich text inline edit: Tabbing to Save button leaves focus in the editor window",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Michelle D'Souza",
  "date": "2011-09-27T16:05:05.285-0400",
  "updated": "2011-09-27T16:09:32.429-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win XP IE 6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2436/",
      "key": "FLUID-2436",
      "summary": "Enter doesn't activate save: using IE"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Tabbing out of the ck editor does not work properly. A single press of the tab key will appear to put focus on the 'save' button but focus remains in the editor window. A second tab will take focus to the 'cancel' button. Shift-tabbing at this point will properly put focus on the save button.&#x20;

        