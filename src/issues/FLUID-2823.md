---json
{
  "title": "FLUID-2823",
  "summary": "Focus sticks to the \"Edit Appearance\" button when openning the UI Options dialog a second time: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-05-28T13:30:07.000-0400",
  "updated": "2011-05-17T11:22:03.332-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6, IE 7 (Win XP)\\\nIE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2823/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-28T13:31:07.000-0400",
      "body": "'screenshot-1' shows the \"Edit Appearance\" button holding on to focus when the dialog opens\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:22:03.328-0400",
      "body": "no longer using a dialog for UI Options\n"
    }
  ]
}
---
Focus sticks to the "Edit Appearance" button when openning the UI Options dialog a second time

Steps to reproduce:

1\) Open the sakai mock-up example

2\) Open the UI Options dialog and then close it

3\) 'tab' to the "Edit Appearance" button and press the enter key to open the UI Options Dialog again

Notice that the dialog opens, but focus remains on the "Edit Appearance" button

        