---json
{
  "title": "FLUID-2121",
  "summary": "Focus is not placed on the first focusable item in the user interface options dialog",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-01-13T13:50:22.000-0500",
  "updated": "2009-03-20T11:24:56.000-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2256/",
      "key": "FLUID-2256"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:03:15.000-0500",
      "body": "Bug Parade  0.8 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-02-11T15:53:13.000-0500",
      "body": "jQuery UI dialog now forces  proper focus\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-11T15:54:34.000-0500",
      "body": "Speaking to Joseph about this.&#x20;\n\nHe suggested that the \"Close\" button be part of a title bar and activated by using the \"esc\" key or clicking on it with the mouse.\n\nThe first focusable element in the dialog should be the first item or whatever makes the most sense.&#x20;\n\nIn our case this would likely be the accordion (when it is implemented) or the first option.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-12T10:23:50.000-0500",
      "body": "It seems as though the commit at r6487 has caused IE to take approximately 10 minutes  to load the UI Options Dialog.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-02-12T10:47:19.000-0500",
      "body": "I went to the link <http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html> , hit the button and it loaded within a second or two....\\\nAlso, the ESC key closes the dialog, as far as I can tell.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T11:31:35.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-20T10:43:16.000-0400",
      "body": "I tested this and reviewed the code. It works nicely.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T11:24:56.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Focus is not placed on the first focusable item in the user interface options dialog

Steps to reproduce:

1\) Open the sakai mock-up example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click "Edit Appearance" to open the user interface options dialog

3\) Tap the tab key

Notice that focus was not on the first focusable item in the dialog, it appears as though focus isn't even in the dialog at all

        