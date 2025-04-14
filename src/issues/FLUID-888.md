---json
{
  "title": "FLUID-888",
  "summary": "'tab' character is displayed as double space, using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-10T14:52:27.000-0400",
  "updated": "2008-07-10T18:51:14.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-888/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-888/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-10T14:55:04.000-0400",
      "body": "'screenshot-1' shows the single tab, in edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T14:56:26.000-0400",
      "body": "'screenshot-2' shows the double tab, outside of edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T18:51:14.000-0400",
      "body": "I did some more testing on this and it turns out that the string used actually had two tab calls.\n\nThe issue was that the first tab only move 1 character and the second moved the full tab, in the text editor.\\\nThis was because of the amount of text before the first tab call. The tab in inline edit was read as two full tabs.\n"
    }
  ]
}
---
When entering a 'tab' character into an in-line edit field, the 'tab' is displayed as a double tab when out of edit mode.

Steps to reproduce:

1\) Open the in-line edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Open one of the in-line edit fields into edit mode

3\) Cut and paste this "before tab		after tab" into the in-line edit field

4\) Press 'enter' to leave the edit mode. Notice that the tab is now a double tab. This is easier to see by using the mouse to gradually highlight the text from one end to the other.

If you re-enter edit mode, notice that the tab is still a single tab

        