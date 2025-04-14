---json
{
  "title": "FLUID-862",
  "summary": "Cannot use the keyboard to navigate away from the reorderable jQuery tabs, using ff",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-08T16:01:36.000-0400",
  "updated": "2008-08-13T15:29:36.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS X, Win XP)\\\nFF3 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-539/",
      "key": "FLUID-539",
      "summary": "Can't use the \"Tab\" key to navigate out of reorderable tabs"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-861/",
      "key": "FLUID-861",
      "summary": "Cannot tab off of accessible jQuery tabs: using FF"
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
      "date": "2008-07-08T18:25:54.000-0400",
      "body": "Subsequent tabs are actually moving focus among the tabs (with no visual ques). This is a result of the inherent jQuery tabs keyboard interaction: <http://ui.jquery.com/functional_demos/#ui.tabs>\n\nThe inherent jQuery tabs keyboard interaction seems to be different than what we've implemented (and what general guidelines recommend, i.e. tab **to** a group, then arrow around **in** the group). Not sure how we should deal with this.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T17:37:10.000-0400",
      "body": "Justin, could you revisit this one, and check if focus is simply moving amongs the tabs without any visual indication? (if you hit enter, it should activate a tab, confirming that you've moved focus).\n\nThe fact that you can tab amongst the tabs is a bug in jQuery: <http://ui.jquery.com/bugs/ticket/3079>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-09T17:49:06.000-0400",
      "body": "No, the focus is not moving at all.\n\nPressing 'tab' multiple times and then pressing 'enter', still activates the same jQuery tab.\n\nWhen you press 'tab' after putting focus on the first jQuery tab the message at the bottom of the FF2 browser says:\\\n<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html#fragment-0>\n\nIf you use the arrow keys to move focus to the next jQuery tab and press the 'tab' key, the message says:\\\n<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html#fragment-1>\n"
    }
  ]
}
---
You are able to tab to the sortable jQuery tabs; however, once a tab has focus, you are unable to tab off. shift-tab also has no effect.

Steps to reproduce:

1\) open the reorderable jQuery UI tabs page off of the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) tap the 'tab' key until one of the reoderable jQuery tabs has focus.&#x20;

3\) tap the 'tab' key again. Notice that there is no response. (note in ff3, it cycles through the jQuery tabs)

4\) tap 'shift-tab'. Notice that there is no response.&#x20;

        