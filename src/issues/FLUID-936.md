---json
{
  "title": "FLUID-936",
  "summary": "Cursor not displaying in editible field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Daphne Ogle",
  "date": "2008-07-17T17:57:28.000-0400",
  "updated": "2008-08-26T08:54:26.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-884/",
      "key": "FLUID-884"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-936/Picture 1.png",
      "filename": "Picture 1.png"
    }
  ],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-07-17T17:59:59.000-0400",
      "body": "Showing that the cursor is not displaying in edit mode.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-22T23:33:21.000-0400",
      "body": "Justin, I'm assigning this issue so you can take a look at it and see if you can reproduce. If you can, would you mind adding additional details about when it happens and assign it to Anastasia, Jacob or myself?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T14:52:46.000-0400",
      "body": "Steps to reproduce:\n\n1\\) Open the inline edit demo from the daily build site:\\\n<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\n\n2\\) Click one of the inline edit fields to activate edit mode\n\n3\\) Edit the text\n\n4\\) Using the keyboard, tap the 'enter' key to save changes\n\n5\\) Click another inline edit field, to place it in edit mode\n\n6\\) Edit text, notice that the cursor is not displayed\n\nI cannot reproduce this 100% of the time, so there may still be something else at play.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T14:54:58.000-0400",
      "body": "Updated the environment the error occurs in\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-08-25T14:52:39.000-0400",
      "body": "Forced caret to move to the beginning of the line\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T08:54:26.000-0400",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
When I initiate edit mode in the demo, there is not cursor so the user can't tell where typing will begin.

        