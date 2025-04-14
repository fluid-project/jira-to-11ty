---json
{
  "title": "FLUID-2843",
  "summary": "Pressing the \"Enter\" key also triggers button press, when trying to open Inline Edit field: using IE",
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
  "date": "2009-05-29T07:26:41.000-0400",
  "updated": "2009-05-29T13:18:25.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit",
    "Keyboard Accessibility"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2843/fluid-2843.txt",
      "filename": "fluid-2843.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-29T09:53:07.000-0400",
      "body": "I believe that this issue was introduced at r7254\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-29T10:49:33.000-0400",
      "body": "It appears that return semantics for jQuery events do not work the way I imagined. In fact, jQuery.trigger never makes any return other than undefined - even if a handler has made a return. The only way out of this is to explicitly construct an event object using jQuery.event before invoking trigger, so that we may inspect its condition after our new synthetic fluid-activate event has completed. Patch attached\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-29T13:18:25.000-0400",
      "body": "Verified fix using:\n\nIE6, IE8 (Win XP)\\\nIE8 (Win Vista)\n"
    }
  ]
}
---
Pressing the "Enter" key also triggers button press, when trying to open Inline Edit field

Steps to reproduce:

1\) Open the sakai announcements example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/inline-edit-announcements.html>

2\) Using the keyboard, 'tab' to one of the inline edit fields

3\) Tap the 'enter' key to attempt to open the inline edit field in edit mode

Notice that the pressing the 'enter' key also activates the 'Update' button, and attempts to move you to another page.

        