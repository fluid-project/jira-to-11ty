---json
{
  "title": "FLUID-2120",
  "summary": "When the font size is increased the \"Edit Appearance\" text is no longer bound within the button",
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
  "date": "2009-01-13T13:46:24.000-0500",
  "updated": "2011-09-06T14:14:05.987-0400",
  "versions": [
    "0.7",
    "0.8",
    "1.0",
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
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2120/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2120/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-13T13:47:08.000-0500",
      "body": "'screenshot-1' shows the text of the button, outside of the button's borders\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-17T09:01:46.000-0400",
      "body": "'screenshot-2' shows how the issue looks currently\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-17T09:02:46.000-0400",
      "body": "Currently the text will remain over the button, but the button itself will stretch and appear disjointed.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-06T14:14:05.977-0400",
      "body": "This is no longer an issue when using the fat panel.\n"
    }
  ]
}
---
When the font size is increased the "Edit Appearance" text is no longer bound within the button

Steps to reproduce:

1\) Open the sakai mock-up example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click on "Edit Appearance"&#x20;

3\) Change the font size to +5, save the changes, and close the dialog

Notice that "Edit Appearance" text is outside of the button boundaries

        