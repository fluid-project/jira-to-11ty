---json
{
  "title": "FLUID-1185",
  "summary": "cannot use the keyboard to navigate away from sortable jQuery Tabs, using Opera 9.5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-08-18T10:14:18.000-0400",
  "updated": "2008-10-31T10:03:49.000-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility",
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-539/",
      "key": "FLUID-539",
      "summary": "Can't use the \"Tab\" key to navigate out of reorderable tabs"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-539/",
      "key": "FLUID-539"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-861/",
      "key": "FLUID-861"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:54:36.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    }
  ]
}
---
cannot use the keyboard to navigate away from sortable jQuery Tabs

Steps to reproduce:

1\) Tap the tab key until one of the sortable jQuery Tabs has focus

2\) Notice that you cannot  navigate away from them using the keyboard. Neither tab nor shift+tab work.

        