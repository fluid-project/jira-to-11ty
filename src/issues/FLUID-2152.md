---json
{
  "title": "FLUID-2152",
  "summary": "No default font style selected",
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
  "date": "2009-01-21T10:46:26.000-0500",
  "updated": "2009-02-11T12:30:19.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2152/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-21T10:47:33.000-0500",
      "body": "'screenshot-1' shows the Font style radio buttons unselected\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-11T12:18:07.000-0500",
      "body": "This is no longer an issue because the radio buttons have been replaced with a drop down in the new design.&#x20;\n"
    }
  ]
}
---
No default font style selected. When opening the UI Options dialog for the first time, none of the Font style radio buttons are selected

steps to reproduce:

1\) Open UI Options example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) In the UI Options dialog, notice that none of the Font Style radio buttons are selected

        