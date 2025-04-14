---json
{
  "title": "FLUID-1183",
  "summary": "No focus styling applied to Accessible jQuery UI Tabs: Using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-18T09:55:36.000-0400",
  "updated": "2010-12-08T15:42:24.783-0500",
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
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:54:59.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:03:21.006-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T15:42:24.777-0500",
      "body": "This bug is no longer relevant because demo has been removed. See <https://fluidproject.atlassian.net/browse/FLUID-3731#icft=FLUID-3731>.\n"
    }
  ]
}
---
No focus styling applied to Accessible jQuery UI Tabs.

Steps to reproduce:

1\) Tap the 'tab' key and notice that no focus styling is ever applied to any of the tabs.

You are able to use the arrow keys to move amongst the tabs, once they have focus.

Pressing shift+tab will put focus on the group of jQuery UI Tabs, but this will disappear once the arrow keys are pressed.

        