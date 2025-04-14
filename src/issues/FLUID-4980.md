---json
{
  "title": "FLUID-4980",
  "summary": "Scroll bar jumps to beginning after choosing a new contrast theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2013-04-15T14:30:02.162-0400",
  "updated": "2014-06-16T09:51:51.874-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Win7 IE9 and FF, Mac FF, Win XP IE8 and FF\\\nChrome 35, FF 29, Safari 7 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-04-15T14:31:31.930-0400",
      "body": "This happens in FF on Mac too.\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-15T14:46:15.655-0400",
      "body": "Also happens with keyboard. Can't tab to radio buttons without it jumping back to the beginning.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-04-16T09:39:36.078-0400",
      "body": "We may not have to fix this if we're going to be implementing a carousel in the fatpanel UIO component.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-04T10:17:29.315-0400",
      "body": "this is also happening with the vertical scrolling in the full page view.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-06-09T13:17:45.871-0400",
      "body": "This is more obvious if using mouse only interaction.\\\n1\\. Resize the browser so the contrast chooser is off view\\\n2\\. Scroll horizontally to contrast chooser\\\n3\\. Click any contrast theme.\\\n4\\. Scroll goes back to beginning. Focus remains on the contrast theme chosen.\n\nIf using keyboard, after choosing a theme, you can move left or right to change themes, even though the chooser is no longer visible on screen.\n"
    },
    {
      "author": "beth.mejsullivan",
      "date": "2014-06-10T13:20:03.840-0400",
      "body": "Submitted a pull request \\\n<https://github.com/fluid-project/infusion/pull/527>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T09:50:06.650-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/527> ) into the project repo at 967c0bdcfbd07783c2297a513a93efb6925d7913\n"
    }
  ]
}
---
Scroll to the contrast panel, choose a theme. The scroll bar goes back to the first panel.

        