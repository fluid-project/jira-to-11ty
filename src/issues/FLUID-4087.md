---json
{
  "title": "FLUID-4087",
  "summary": "Tabbing moves into the Preview Window Components prior to 'Reset', 'Save and Apply', 'Cancel' Buttons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "John Kremer",
  "date": "2011-02-18T13:23:58.775-0500",
  "updated": "2015-06-09T10:45:24.625-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Win 7 IE9, FF3.6 \\\nmac 10.6 FF6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2257/",
      "key": "FLUID-2257",
      "summary": "Items in the preview window should not be in the tab order"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4421/",
      "key": "FLUID-4421",
      "summary": "Determine where the action buttons should be placed in full page UIO"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2257/",
      "key": "FLUID-2257",
      "summary": "Items in the preview window should not be in the tab order"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When tabbing through the Appearance Options, the tab index goes into the Preview Window and you have to tab through all the individual components prior to getting the buttons that the user can use.

        