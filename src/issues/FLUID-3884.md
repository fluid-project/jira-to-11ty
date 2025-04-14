---json
{
  "title": "FLUID-3884",
  "summary": "NVDA feedback after editing a text area is the url to the page on IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "assignee": "Harris Wong",
  "reporter": "heidi valles",
  "date": "2010-12-08T16:52:13.312-0500",
  "updated": "2011-02-09T16:42:30.120-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "win xp, IE8, nvda\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T13:09:33.582-0500",
      "body": "A similar issue exists where when focus is placed on the rich text inline edit field, NVDA reads \"Link\" and then the URL of the page.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-25T11:04:39.416-0500",
      "body": "I cannot reproduce this on my IE8, Win XP SP3.\n\nHowever, I can reproduce this on my IE8 with Compatibility mode, or the IE7 mode by IE's DebugBar plugin.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-25T11:12:14.737-0500",
      "body": "I have reproduce this on IE8 now.  It sometimes do read the button text instead of the URL. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-27T10:20:20.035-0500",
      "body": "In InlineEdit.js line 125 (or line 111), when that.textEditButton.focus(0) is called, NVDA on IE8 would return \"button <[http://\\*\\*\\*\\*\\*\\*](http://******/)>\" instead of \"Edit Text \\*\\*\\* button\".  It seems as though the focus on the button was not found on IE8.  Looking at the function \"finish\", at line 80; switchToViewMode() switches the view to visible again before calling focus.  If I add a time delay between line 124 and 125, then NVDA seems to report the button fine.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-01-27T11:05:19.753-0500",
      "body": "suggested solution #1: call focus through listener instead of running it directly after finish(that) on line 125.  \\\nsuggested solution #2: Set a delay for IE8.  setTimeout(function(){that.textEditButton.focus(0);}), 150); on line 125.\n\nUpdate: tried solution #1, added that.textEditButton.focus(0) in afterFinishEdit.addListener(), didn't work.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-03T11:55:12.385-0500",
      "body": "Not only after editing, it happens after you press escape as well.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-03T11:58:29.282-0500",
      "body": "The problem cannot be reproduced with the newest NVDA 2011.1 Beta1. &#x20;\n\nSystem:\\\nWinXP SP3, IE8\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-09T16:42:30.044-0500",
      "body": "This appears to be a bug in NVDA, which Harris has noted is fixed in the latest version.\n"
    }
  ]
}
---
After editing text, the url to the page is read. Perhaps because focus was on a now hidden input?

        