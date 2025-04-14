---json
{
  "title": "FLUID-863",
  "summary": "no focus styling when tabbing through reorderable jQuery tabs, using FF3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-08T16:35:04.000-0400",
  "updated": "2008-07-09T17:42:03.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF3 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-861/",
      "key": "FLUID-861",
      "summary": "Cannot tab off of accessible jQuery tabs: using FF"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-862/",
      "key": "FLUID-862",
      "summary": "Cannot use the keyboard to navigate away from the reorderable jQuery tabs, using ff"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-08T18:20:51.000-0400",
      "body": "I'm not sure this one is a bug. The behaviour you describe is the way jQuery tabs just work, independent of the Reorderer. Try\\\n<http://ui.jquery.com/functional_demos/#ui.tabs>\n\nThe issue seems to be that in step 3) of your process, 'focus' is moving to the next tab, there's just no visual indication. Hitting enter at this point activates the new tab. You can see this more clearly if you hit tab more than once (and keep track in your head of where you are).\n\nI guess the question is: Should the Reorderer be adding visual styling to this already existing behaviour? Not sure...\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T17:35:13.000-0400",
      "body": "This is actually not a bug in our code: tabbing through the tabs is not the way you're supposed to navigate tabs. The fact that you can with jQuery tabs is a bug in jQuery, which I filed:\n\n<http://ui.jquery.com/bugs/ticket/3079>\n"
    }
  ]
}
---
When tabbing through the set of reorderable jQuery tabs, the focus styling does not display.

Steps to reproduce:

1\) open the reorderable jQuery page from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) tap the 'tab' key until one of the reorderable jQuery tabs has focus.

3\) tap the 'tab' key again. Notice that the focus styling is not present on any tab.

4\) press 'enter', one of the other tabs should have been selected.

        