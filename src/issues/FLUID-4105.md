---json
{
  "title": "FLUID-4105",
  "summary": "Can tab to the uploader's status bar using FF4",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Justin Obara",
  "date": "2011-02-22T16:14:09.645-0500",
  "updated": "2014-03-03T13:38:29.412-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF4 (Win 7, Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4105/keyboard-focus-overflow-auto-test.html",
      "filename": "keyboard-focus-overflow-auto-test.html"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4105/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-22T16:15:14.038-0500",
      "body": "The \"Screenshot\" attachment shows the focus styling on the status bar after tabbing to it\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-22T17:13:04.824-0500",
      "body": "With some fun debugging-fu from Justin and I, we've determined that elements with an overflow:auto style will be keyboard focusable in Firefox 4, even if they shouldn't be. This issue is in Firefox, and I'll escalate it to Mozilla if it isn't already on their radar.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-22T17:15:53.753-0500",
      "body": "Here's a test file that, when run in Firefox 4, shows that a \\<div> with an overflow:auto style is incorrectly focusable with the tab key.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-22T17:18:40.954-0500",
      "body": "Mozilla is aware of the issue and it is being tracked in Bugzilla: <https://bugzilla.mozilla.org/show_bug.cgi?id=616594>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T13:38:25.229-0500",
      "body": "The bugzilla ticket has been resolved as fixed.\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html>\
<http://build.fluidproject.org/sakai-imagegallery2-web/site/BrowseImages/>

2\) Using the keyboard, tap the "tab" key to navigate through the component\
Notice that you are able to place focus on the status bar; however, only the button within the status bar should be focusable.

        