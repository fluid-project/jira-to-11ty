---json
{
  "title": "FLUID-4072",
  "summary": "Invalid keyboard move displays inaccurate message for keyboard usage",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2011-02-16T15:53:05.456-0500",
  "updated": "2016-11-09T12:22:57.495-0500",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "IE 8, IE 9, IE 10, IE 11 (Windows 7),\\\nChrome 43,\\\nFirefox 38,\\\nSafari 8\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5395/",
      "key": "FLUID-5395"
    }
  ],
  "attachments": [],
  "comments": []
}
---
In the Layout Reorderer demo, if attempting to move a portlet that is positioned just below a locked portlet, pressing ctrl+up will display the message: "The element can not be placed here. The element underneath is locked." This message is valid for mouse interaction, but not keyboard.

The message should be updated and generalized to apply to both keyboard and mouse actions.

        