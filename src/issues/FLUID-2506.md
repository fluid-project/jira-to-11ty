---json
{
  "title": "FLUID-2506",
  "summary": "Keyboard navigation inside the dialog breaks in simple layout mode: using FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-04-03T13:32:17.000-0400",
  "updated": "2011-01-07T13:06:53.160-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-12T16:16:46.000-0400",
      "body": "I was able to tab to the first form control (the font style) however focus immediately moved back to the close button.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:12:58.000-0400",
      "body": "Bug Parade 1.1 release\n"
    }
  ]
}
---
Keyboard navigation inside the dialog breaks in simple layout mode

Steps to reproduce:

1\) Open the Sakai Mock-up

2\) Open the UI Options dialog and change to simplified layout and save and apply the changes

Notice that you can't tab inside of the dialog. You can hit the 'esc' key to exit, and then tab back to open the dialog again. However, you are unable to tab off of the close button in the dialog.

        