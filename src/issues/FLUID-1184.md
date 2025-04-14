---json
{
  "title": "FLUID-1184",
  "summary": "Focus styling not removed from Accessible jQuery UI Tabs: using Opera",
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
  "date": "2008-08-18T10:07:55.000-0400",
  "updated": "2011-01-12T13:17:34.646-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:54:48.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-28T12:35:02.000-0400",
      "body": "This is also the case with sortable jQuery UI Tabs\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-12T13:17:34.617-0500",
      "body": "The demos in question have been removed.\n"
    }
  ]
}
---
Focus styling not removed from Accessible jQuery UI Tabs after tabbing away.

Steps to reproduce:

1\) Tap the 'tab' key until one of the jQuery Tabs has focus

2\) Tap the 'tab' key again, notice tha the entire group of jQuery Tabs has focus

3\) Tap the 'tab' key again, notice that even though the focus has moved, the styling is still present on the group of jQuery Tabs

        