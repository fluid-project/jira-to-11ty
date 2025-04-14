---json
{
  "title": "FLUID-2368",
  "summary": "Textfields do not show current values when the dialog opens",
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
  "date": "2009-03-17T12:36:25.000-0400",
  "updated": "2009-03-24T18:10:55.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2368/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T12:36:58.000-0400",
      "body": "'screenshot-1' shows the text fields empty\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-19T09:21:32.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-19T09:21:44.000-0400",
      "body": "also happens on cancel\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-24T18:10:55.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista\n"
    }
  ]
}
---
Textfields do not show current values when the dialog opens

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site

2\) Open the UI Options dialog

Notice that the textfields are all empty

        