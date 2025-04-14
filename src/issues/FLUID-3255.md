---json
{
  "title": "FLUID-3255",
  "summary": "\"Reset Selection\" doesn't reset the Download options selection",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Justin Obara",
  "date": "2009-10-08T10:16:01.000-0400",
  "updated": "2009-11-02T15:36:07.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": "FF3, FF3.5, Opera 9.6, Safari 3.2, Safari 4 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF3, FF3.5, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3.5, IE7, IE8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-26T13:48:56.000-0400",
      "body": "Added code to rendering of type selections to allow renderer access to the elements via id. Added method resetTypeSelections to reset the model value to minified, check the minified radio button and then fire the model changed event. Called the method from the unselect function.\n"
    }
  ]
}
---
"Reset Selection" doesn't reset the Download options selection

Steps to reproduce:

1\) Open the builder page

2\) Change the download options radio button selection

3\) Press the "Reset Selection" button

Notice that the Download Options selection isn't reset

        