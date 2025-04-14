---json
{
  "title": "FLUID-2842",
  "summary": "UI Options dialog shows partly off screen when large font size set",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T22:55:58.000-0400",
  "updated": "2011-09-06T11:59:53.992-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "XP / IE8 Sakai Demo\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2829/",
      "key": "FLUID-2829",
      "summary": "Parts of the \"User interface options\" are cut off with big text size"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2842/Picture 1.png",
      "filename": "Picture 1.png"
    }
  ],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2009-05-28T22:57:10.000-0400",
      "body": "This show left 1/4 of UI Options inaccessible with largest font setting chosen.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:38:22.000-0400",
      "body": "The problem is that the dialog is centred and expands off of the screen to the left at large font sizes. You are unable to scroll to the left so portions of the dialog becomes unusable.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-06T11:59:53.977-0400",
      "body": "This is no longer an issue since we moved to the fat panel version instead of using a dialog.\n"
    }
  ]
}
---
I'm attaching a file which is a screen shot.  The left 1/4 of the screen is inaccessible.  I can get to everything on the far right with the horizontal scroll but it doesn't got left enough.

        