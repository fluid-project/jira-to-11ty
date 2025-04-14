---json
{
  "title": "FLUID-984",
  "summary": "While moving an avatar quickly, the pointer will appear as an arrow instead of a hand",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-07-22T19:05:33.000-0400",
  "updated": "2008-08-11T08:44:37.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T14:22:36.000-0400",
      "body": "Due to performance improvements in the event loop, it is probable that this condition can now occur rarely if at all - please could you recheck with the current build? (After end of today), Cheers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-11T08:44:37.000-0400",
      "body": "Still occurs, but is less noticeable. I will close for now, but will re-open if user testing or anyone else feels that it is an issue.\n"
    }
  ]
}
---
While moving an avatar quickly, the pointer will appear as an arrow instead of a hand.

Steps to reproduce:

1\) Open the Sortable JQuery Tabs Demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Drag one of the Tabs. Notice that while you quickly move the mouse, the pointer changes to an arrow

        