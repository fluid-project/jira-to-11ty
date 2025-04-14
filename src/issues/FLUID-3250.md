---json
{
  "title": "FLUID-3250",
  "summary": "Improper focus styling is used in the Infusion Builder, so items appear to not have focus.",
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
  "reporter": "Justin Obara",
  "date": "2009-10-07T13:10:38.000-0400",
  "updated": "2010-01-06T13:44:09.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE 8 Win Vista, Win XP\\\nFirefox 3, Debian\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3235/",
      "key": "FLUID-3235",
      "summary": "Infusion builder styling  "
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3359/",
      "key": "FLUID-3359"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T11:08:29.000-0500",
      "body": "This is related to the css re-design that Jacob is already doing so I am assigning this task to Jacob.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-06T13:44:02.000-0500",
      "body": "Jacob's redesign fixed this\n"
    }
  ]
}
---
Improper focus styling used, so items appear to not have focus

Steps to reproduce:

1\) Open the Infusion Builder

2\) Attempt to use the keyboard to navigate to the checkboxes

Notice that there appears to be no focus styling. This is because the focus styling is white on a white background

        