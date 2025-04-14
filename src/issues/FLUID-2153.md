---json
{
  "title": "FLUID-2153",
  "summary": "Saving the \"No Preferences\" options removes styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-01-21T10:54:40.000-0500",
  "updated": "2009-02-12T10:26:01.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2222/",
      "key": "FLUID-2222",
      "summary": "Selecting 'No Preference' for text size in UI Options causes text sizes set with FSS to be changed."
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2153/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2153/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-21T10:55:20.000-0500",
      "body": "'screenshot-1' shows that page after saving with \"No preference\" options\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-21T10:56:07.000-0500",
      "body": "'screenshot-2' shows the default style of the page on load\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:02:06.000-0500",
      "body": "Bug Parade  0.8 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-11T12:10:05.000-0500",
      "body": "There is still an error with the text size. I'll open a new issue for it.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T15:19:36.000-0500",
      "body": "I've reviewed this fix, and it looks good to me. I've also linked the issue to the new issue that Michelle created for the font size, just in case.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-12T10:26:01.000-0500",
      "body": "Verified fix using;\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n"
    }
  ]
}
---
Saving the "No Preferences" options removes styling

Steps to reproduce:

1\) Open the UI Options example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) In the UI Options dialog, without making and changes,  click save and apply

Notice that the default styling is all removed

        