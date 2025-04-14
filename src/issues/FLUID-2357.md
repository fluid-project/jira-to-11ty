---json
{
  "title": "FLUID-2357",
  "summary": "Refresh saves and applies changes",
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
  "date": "2009-03-17T09:29:49.000-0400",
  "updated": "2009-03-19T10:00:17.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T09:30:57.000-0400",
      "body": "I'm guessing that as changes are being made, they are written to the cookie, on refresh the page is redrawn based on what is in the cookie. If this is the case, only writing to the cookie on \"Save and apply\" should fix this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-17T09:31:49.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-19T09:02:29.000-0400",
      "body": "The preview really shouldn't be saving to a cookie so the solution is to make a temporary settings store and use that for the preview's uiEnhancer.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-19T09:46:11.000-0400",
      "body": "Tried it out, and it works nicely\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-19T10:00:17.000-0400",
      "body": "Verified fix using the following:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Refresh saves and applies changes

Steps to reproduce:

1\) Open the UI Options example\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Changes some of the settings (do not save changes)

3\) refresh the browser

Notice that the changes are applied when the browser refreshes.

        