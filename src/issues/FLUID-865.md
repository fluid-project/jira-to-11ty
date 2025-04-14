---json
{
  "title": "FLUID-865",
  "summary": "Screen flashes white on first movement of bottom-right portlet, using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-08T17:33:26.000-0400",
  "updated": "2008-11-03T09:02:27.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-03T09:02:27.000-0500",
      "body": "Appears to have been fixed with one of the commits leading up to the 0.6beta\n"
    }
  ]
}
---
On the first movement of the bottom-right portlet, the screen flashes white.

Steps to reproduce:

1\) go to the Uportal page from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Using the mouse, attempt to drag the bottom-right portlet. Notice the screen flash white.

This does not occur with keyboard dnd, or if you move another portlet first.

        