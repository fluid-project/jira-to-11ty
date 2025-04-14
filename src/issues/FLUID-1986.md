---json
{
  "title": "FLUID-1986",
  "summary": "Font size only changes in the preview.",
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
  "date": "2008-12-16T11:50:28.000-0500",
  "updated": "2009-01-13T11:10:18.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1986/basic-20090109110040.png",
      "filename": "basic-20090109110040.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1986/FLUID-1986.patch",
      "filename": "FLUID-1986.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1986/native-20090109110113.png",
      "filename": "native-20090109110113.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:10:53.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-07T11:43:31.000-0500",
      "body": "Added BODY rule to enforce font size\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-07T12:40:10.000-0500",
      "body": "I've reviewed and tested this patch. Looks good.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-07T13:58:38.000-0500",
      "body": "All of the font sizes change,  but this is causing some overlap issues in IE. (When the font is set to +4 or higher)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-08T15:52:12.000-0500",
      "body": "The font size on the \"Save and Apply Your Preferences\" button does not change in Safari. It shrinks if the font size is made smaller, but doesn't increase in size when selecting a large font size.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-09T12:02:15.000-0500",
      "body": "There is a question of which is more effective in Safari: non native but correctly sized buttons, or incorrectly sized but familiar and native buttons. Please see attached screenshots.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-12T13:58:34.000-0500",
      "body": "The concensus of people on the Fluid work list agreed to overrride the native OS look n feel to accomodate large font sizes.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-13T11:03:05.000-0500",
      "body": "I reviewed the commits and they look good.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T11:10:18.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Font size only changes in the preview.&#x20;

Steps to reproduce:

1\) Open the UI Options example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) change the font size. It should show in the preview window.

3\) click the 'Save and apply your preferences' button

Notice that only the font size in the preview and on the "Save and apply your preferences" button changes

        