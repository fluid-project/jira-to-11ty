---json
{
  "title": "FLUID-6119",
  "summary": "Text-to-Speech option stops after reading a portion of the overview panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2017-01-26T09:14:43.849-0500",
  "updated": "2018-05-28T15:07:56.699-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "Text To Speech"
  ],
  "environment": "Chrome 54, 55 ( Win 7 )\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-97/",
      "key": "SJRK-97",
      "summary": "Text-to-speech cuts off early"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2017-09-19T15:02:50.959-0400",
      "body": "Unable to reproduce the bug in Chrome 61.0.3163.91 or Firefox 55.0.2/55.0.3, both on Windows 10. It seems to work fine for me in those browsers, currently.\n\nPossibly related, including a potential fix: <https://bugs.chromium.org/p/chromium/issues/detail?id=679437>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-20T09:18:15.488-0400",
      "body": "Tried with Win 7 using Chrome 61.0.3163.91 and could no longer reproduce.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the prefs framework [demo](http://build.fluidproject.org/infusion/demos/prefsFramework/)\
2\) Open the display preferences panel\
3\) enable text-to-speech and listen to it read out the page\
Notice that it stops reading after "... and delivery environments"

However if you refresh the page when text-to-speech is enabled. It will continue reading the contents of the page from "Notes: The 'text-to-speech' ...".&#x20;

        