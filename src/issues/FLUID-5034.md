---json
{
  "title": "FLUID-5034",
  "summary": "Font icons don't refresh properly in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "heidi valles",
  "date": "2013-06-05T10:35:36.619-0400",
  "updated": "2014-06-25T16:01:17.400-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Win XP, IE8\\\nWin 7, IE8\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4994/",
      "key": "FLUID-4994",
      "summary": "Convert existing icons to font icons"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-30T16:05:36.536-0400",
      "body": "I have noticed this in IE8 with the Overview Panel: Sometimes, if you close the panel using the 'Close' button, the icons are gone when you re-open the panel. And some of those times, they will re-appear if you close the panel with the icon instead. But it's inconsistent.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-06-06T12:43:13.773-0400",
      "body": "To reproduce:\\\n1\\. Load the prefs framework demo: <http://build.fluidproject.org/infusion/demos/prefsFramework/>\\\n2\\. Open the preferences panel and change to yellow on black.\\\n3\\. Notice that the reset icon remains grey and the Fluid Star icon in the Overview Panel remains orange.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.339-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
There's a known issue in IE8 - font icons sometimes do not update until interacted-with. See <http://andymcfee.com/2012/04/icon-fonts-pseudo-elements-and-ie8/> for details.&#x20;

This is most noticeable when using UIOptions (fat panel) - make preference changes and font icons within the page do not update until clicked on or used. Close the panel and reopen, and font icons in UIO are not consistently updated as well.

        