---json
{
  "title": "FLUID-1606",
  "summary": "Inline edit: Undo icon missing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Allison Bloodworth",
  "date": "2008-09-23T20:55:34.000-0400",
  "updated": "2008-09-25T10:26:10.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1606/Picture 2.png",
      "filename": "Picture 2.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-24T13:17:21.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-24T16:32:45.000-0400",
      "body": "Undo is there now, but there is no icon just yet\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T16:35:23.000-0400",
      "body": "There seems to be a bug in the code (either InlineEdit or Undo, not sure which yet) resulting in the custom undo icon rendering not working (this explains why the icon in the bSpace example is not working, too). I'll investigate.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T16:43:56.000-0400",
      "body": "I've committed a fix to the bug that caused the custom icon to not work. Jacob should be able to get it working now.  r5670\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-24T16:47:35.000-0400",
      "body": "Anastasia fixed custom undo renderer & icon was added to example\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T16:48:47.000-0400",
      "body": "I've reviewed Anastasia's fix at 5670 and it is correct. Some stale code had been left behind at Fluid-js.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-24T16:54:44.000-0400",
      "body": "The undo icon should be to the right of the text, not to the left.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-24T16:58:47.000-0400",
      "body": "Fixed placement of undo/redo, to the right of the editable text\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-25T10:06:30.000-0400",
      "body": "Jacob's fix looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T10:26:10.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
On <http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>, if you edit the Announcement title, the undo icon does not appear (as it should). See attached screenshot.

The undo icon should be right next to the item that was edited, as specified in the "Change Section name" scenario on this page: <http://wiki.fluidproject.org/display/fluid/Simple+Text+Inline+Edit+Storyboard>.

        