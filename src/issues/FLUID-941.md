---json
{
  "title": "FLUID-941",
  "summary": "Keyboard navigation for Inline Edit is broken, using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-18T13:40:57.000-0400",
  "updated": "2008-08-11T08:25:59.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-940/",
      "key": "FLUID-940",
      "summary": "Keyboard navigation for Reorderer broken, using Safari"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-942/",
      "key": "FLUID-942",
      "summary": "Keyboard navigation for the keyboard-a11y examples is broken, using safari"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-18T14:56:38.000-0400",
      "body": "This is because Safari only supports tab focus of form elements\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-07T14:19:23.000-0400",
      "body": "There's nothing we can do about this one.\n"
    }
  ]
}
---
You are unable to 'tab' to any of the inline edit fields. This is even the case if you change the settings to "Press Tab to highlight each item on a web page"

Steps to reproduce:

1\) Open the Inline Edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Tap the tab key. Notice that you are unable to put focus on any of the  inline edit fields

        