---json
{
  "title": "FLUID-861",
  "summary": "Cannot tab off of accessible jQuery tabs: using FF",
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
  "date": "2008-07-08T15:56:19.000-0400",
  "updated": "2010-12-08T15:14:32.167-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
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
  "environment": "FF2, FF3, Opera 9.6 (Mac OS X)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1185/",
      "key": "FLUID-1185",
      "summary": "cannot use the keyboard to navigate away from sortable jQuery Tabs, using Opera 9.5"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-539/",
      "key": "FLUID-539"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-862/",
      "key": "FLUID-862"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-863/",
      "key": "FLUID-863"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T17:42:11.000-0400",
      "body": "Not a bug: the tab key isn't expected to navigate amongst tabs in this demo, the arrow keys should.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-09T18:16:29.000-0400",
      "body": "The actual issue is that you are unable to 'tab' away from the jQuery tabs at all. The user won't be able to press the 'tab' at all, it becomes completely none responsive.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:55:16.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-30T11:10:16.000-0500",
      "body": "This is a bug in Firefox and/or JQuery UI - since there should be no possible situation in which a browser generates a \"focus black hole\". It needs to be escalated somewhere... perhaps to Mozilla if we can satisfy ourselves, as with <https://fluidproject.atlassian.net/browse/FLUID-539#icft=FLUID-539>, that no Javascript is firing during the tab keypress.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:54:12.370-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T15:14:32.154-0500",
      "body": "This demo has been removed from the repository. See <https://fluidproject.atlassian.net/browse/FLUID-3731#icft=FLUID-3731>.\n"
    }
  ]
}
---
You are able to tab to the jQuery tabs; however, once a tab has focus, you are unable to tab off. You are able to shift-tab away from them.

Steps to reproduce:

1\) open the jQuery UI tabs - keyboard accessibility page off of the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/jquery-ui-tabs/jquery-ui-accessible-tabs.html>

2\) tap the 'tab' key until one of the jQuery tabs has focus.&#x20;

3\) tap the 'tab' key again. Notice that there is no response.

4\) tap 'shift-tab' to move away from the jQuery tabs.&#x20;

        