---json
{
  "title": "FLUID-3300",
  "summary": "When using the keyboard to reset UI Option's current settings, you cannot actually saved your reset values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-10-15T16:26:10.000-0400",
  "updated": "2011-05-17T09:55:55.150-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE8 XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:55:55.148-0400",
      "body": "No longer using a dialog for UI Options\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>\
Activate the UI Options dialog by pressing "Edit Appearance" and make some changes to the UI and save changes.\
Use keyboard to re-activate the UI Options dialog and then use keyboard to navigate to reset button.

Notice that the preview window shows the reset page, but you cannot use keyboard to re-enter the dialog and save your changes.

        