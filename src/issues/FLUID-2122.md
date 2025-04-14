---json
{
  "title": "FLUID-2122",
  "summary": "\"Add Widgets\" and \"Edit Appearance\" buttons are side by side in simple layout mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-01-13T13:53:23.000-0500",
  "updated": "2009-03-16T10:54:15.000-0400",
  "versions": [
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2122/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-13T13:55:53.000-0500",
      "body": "'screenshot-1' shows the \"Add Widgets\" and \"Edit Appearance\" buttons side by side in simple layout.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-16T10:54:15.000-0400",
      "body": "Appears to have been fixed\n\nTested using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
"Add Widgets" and "Edit Appearance" buttons are side by side in simple layout mode, they should be aligned vertically instead of horizontally.

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click on "Edit Appearance" to open the UI Options dialog

3\) Change the layout to simple, save changes and close the dialog

Notice that the "Add Widgets" and "Edit Appearance" buttons are aligned horizontally instead of vertically

        