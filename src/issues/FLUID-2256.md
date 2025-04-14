---json
{
  "title": "FLUID-2256",
  "summary": "Can't close the UI Options dialog by pressing the 'esc' key",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-18T09:00:56.000-0500",
  "updated": "2009-03-20T10:22:27.000-0400",
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
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2121/",
      "key": "FLUID-2121",
      "summary": "Focus is not placed on the first focusable item in the user interface options dialog"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-18T09:02:22.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-2121#icft=FLUID-2121> and this issue can likely both be solved by switching to a jQuery Dialog. However, our resent attempts to do so resulted in the dialog breaking in both IE and Opera.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T10:22:27.000-0400",
      "body": "this is fixed now that we have moved to a jQuery UI dialog\n"
    }
  ]
}
---
Can't close the UI Options dialog by pressing the 'esc' key

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Open the UI Options dialog by click on "Edit Appearance"

3\) Using the keyboard tap the 'esc' key

Notice that the dialog doesn't close. You either have to use the mouse to click the close button or tab to it and press 'enter'.

        