---json
{
  "title": "FLUID-2252",
  "summary": "Inline Edit Rich Text - edited text lacks keyboard focus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Alison Benjamin",
  "date": "2009-02-17T15:07:31.000-0500",
  "updated": "2009-08-12T15:23:42.000-0400",
  "versions": [
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-12T15:23:42.000-0400",
      "body": "Appears to have been fixed, likely with either the upgrade to the new example or with changes made to 1.1.1\n"
    }
  ]
}
---
After editing content in keyboard mode, edited text will not show a keyboard focus. However, if you press enter, even though no focus is shown, the text editor will open.&#x20;

        