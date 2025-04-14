---json
{
  "title": "FLUID-2263",
  "summary": "Changing the radio buttons with the keyboard will no effect when changes are saved: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-02-18T12:10:15.000-0500",
  "updated": "2010-01-07T10:05:16.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Safari 3.1 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3462/",
      "key": "FLUID-3462"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-04T13:42:23.000-0500",
      "body": "Cannot Reproduce:\n\nSafari 3.2 (Mac OS 10.5)\n"
    }
  ]
}
---
Changing the radio buttons with the keyboard will no effect when changes are saved

Steps to reproduce:

1\) Open the UI Options example or the Sakai mock-up

2\) (Sakai mock-up only) Open the UI Options dialog by clicking on the "Edit Appearance" button

3\) Using the keyboard navigate to the Background Images and the Simplified Layout options and select a different radio button

4\) Save the changes

Notice that the options changed do not take effect. Note that this does work if you  use the mouse to change the radio buttons

        