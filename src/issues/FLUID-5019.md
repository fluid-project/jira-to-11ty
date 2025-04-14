---json
{
  "title": "FLUID-5019",
  "summary": "Current theme indicator not showing in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2013-05-13T16:12:14.543-0400",
  "updated": "2014-06-25T16:01:18.089-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "winxp, IE8\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4995/",
      "key": "FLUID-4995",
      "summary": "Convert icons used in UI Options to font icons"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:18.088-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
It seems the CSS rule .fl-uiOptions .fl-choice input:checked + div:before\
doesn't work in IE8.

        