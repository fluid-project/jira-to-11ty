---json
{
  "title": "FLUID-2856",
  "summary": "Editing the slider value in the text box, causes keyboard incrementing of the slider thumb to append a \"1\" to the value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-06-01T09:00:56.000-0400",
  "updated": "2011-06-27T11:27:29.710-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2856/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-01T09:02:09.000-0400",
      "body": "'screenshot-1' shows the textfield slider with the 1 appended to the value.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:29:48.000-0400",
      "body": "possibly doing a \"+\" operation while the value is of type string\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:56:59.678-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T10:46:07.005-0400",
      "body": "I am no longer able to reproduce this - perhaps it was fixed when all the component refactoring happened.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-27T11:27:29.708-0400",
      "body": "Confirmed that this issue is no longer re-producible.\n"
    }
  ]
}
---
Editing the slider value in the text box, causes keyboard incrementing of the slider thumb to append a 1 to the value

Steps to reproduce:

1\) Open the Sakai mock-up example

2\) Open the UI Options dialog and modify one of the text field sliders by typing in a new value in the textfield

3\) tab or shift-tab back to the slider thumb and increment it via the keyboard

Notice that the thumb jumps to the end of the slider, and the value in the textfield now has a "1" appended to it.

This occurs whether or not you save the change to the textfield, or not.

        