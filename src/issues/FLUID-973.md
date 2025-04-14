---json
{
  "title": "FLUID-973",
  "summary": "Cannot open inline edit demo page, using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-22T15:16:48.000-0400",
  "updated": "2008-07-25T16:23:47.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1030/",
      "key": "FLUID-1030",
      "summary": "Inline Edit tooltip needs to be initialized *after* page load"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-950/",
      "key": "FLUID-950",
      "summary": "Inline edit not working in IE"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-973/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-22T15:18:05.000-0400",
      "body": "'sreenshot-1' shows the error message displayed by IE\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-25T10:15:47.000-0400",
      "body": "Interesting. In my IE7, I get the error dialog, but the page is actually loaded behind it, and when I dismiss the error, I don't even have to hit the back button - the page is still there, and the Inline Edits work.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-25T10:21:37.000-0400",
      "body": "This seems to be related to the new tooltip functionality:\n\nIf the jquery.tooltip.js plugin is NOT included in the source (making the tooltip not work), this error does NOT occur.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-25T10:51:08.000-0400",
      "body": "Oddly, other than causing the error dialog, the tooltip functionality still seems to be fine.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-25T11:14:12.000-0400",
      "body": "This was a known issue in the tooltip plugin. The initalization neede to be wrapped in the document  ready() function.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-25T13:33:16.000-0400",
      "body": "Anastasia,\n\nI'm curious about your fix here. Does this imply that every instantiation of an InlineEdit component, to be successful, now needs to be wrapped in a ready() call? If so, I'm concerned about this. You've worked around the particular issue, but it points to a larger problem we should address.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-25T13:34:11.000-0400",
      "body": "I'm reopening this issue because I want to make sure that we've fully considered this issue and its impact on users of the InlineEdit. Is it right to force them to wrap any instantiation of our code in a jQuery.ready call?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-25T16:17:41.000-0400",
      "body": "Moved the waiting for page load to the tooltip initialization only, instead of the whole inline edit.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T16:23:47.000-0400",
      "body": "Verified fix using IE6 and IE7 (win xp)\n"
    }
  ]
}
---
After clicking the link to the inline edit demo page, the page loads with an alert. Clicking the alert goes to an error page, saying the page cannot be displayed.

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Notice that an alert message pops up. Click 'Okay'

3\) Notice that you are now taken to a page that says that the page cannot be displayed.

Oddly, in IE7 you can hit the 'back' button, and the page works.

        