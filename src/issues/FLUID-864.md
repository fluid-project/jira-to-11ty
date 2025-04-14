---json
{
  "title": "FLUID-864",
  "summary": "keyboard navigation limited for reoderable jQuery tabs, using IE6 & IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-08T17:21:37.000-0400",
  "updated": "2008-07-09T18:10:04.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T17:40:32.000-0400",
      "body": "The tab key shouldn't actually be moving focus amongst the tabs, this is a bug in jQuery:\\\n<http://ui.jquery.com/bugs/ticket/3079>\n\nIf the arrow keys still work properly, I would consider this one to not be a bug.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-09T18:10:04.000-0400",
      "body": "the arrow keys still work\n"
    }
  ]
}
---
You are able to tab around, but the jQuery tabs to the left of the last moved jQuery tab will not get focus. Pressing shift-tab will only cycle through the jQuery tabs to the left of and including the last moved jQuery tab.

Steps to reproduce:

1\) open the reorderable jQuery tab page from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) tap the "tab" key until one of the reorderable jQuery tabs gets focus.

3\) use the keyboard (ctrl-arrow) to move the tab.

4\) press the tab key and notice that it never touches the jQuery tabs to the left of the one that was moved.

5\) press shift-tab and notice that it will only cycle through the jQuery tabs to the left of and including the one that was moved

        