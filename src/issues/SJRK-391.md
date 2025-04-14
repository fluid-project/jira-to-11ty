---json
{
  "title": "SJRK-391",
  "summary": "Story Tool button active states malfunctioning with keyboard controls",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2020-08-26T14:05:49.612-0400",
  "updated": "2020-08-26T14:05:50.317-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-388/",
      "key": "SJRK-388"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-390/",
      "key": "SJRK-390"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-225/",
      "key": "SJRK-225"
    }
  ],
  "attachments": [],
  "comments": []
}
---
There are a few different issues with active states and keyboard controls:

* Currently, the active state of buttons does not appear when using the Enter key (Firefox, Chrome)
  * Desired behaviour: Enter key should trigger the active state for all buttons
* Selecting space bar to activate a button makes the active state persist. To remove the active state, user must hit Enter (Chrome on macOS).
  * In Windows, reproduce by holding space bar down and pressing tab
  * Desired behaviour: space bar triggers active state (and button), active state does not persist
* Space bar only activates the add block buttons, not any other button (i.e. delete, upload, continue etc) (Chrome MacOS)
  * Desired behaviour: space bar should activate all buttons consistently

        