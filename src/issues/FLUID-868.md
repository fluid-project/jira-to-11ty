---json
{
  "title": "FLUID-868",
  "summary": "Lower half of portlet avatar missing, using IE7",
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
  "date": "2008-07-08T17:57:45.000-0400",
  "updated": "2008-09-11T10:45:33.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-08T19:37:02.000-0400",
      "body": "This is a known issue in IE, and there isn't really anything we can do about it.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-11T09:23:07.000-0400",
      "body": "There was a fixed width and height assigned to the clone, cropping it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T10:45:33.000-0400",
      "body": "IE7 (Win XP, Win Vista)\n"
    }
  ]
}
---
The lower portion of the avatar is missing, when moving a portlet that is larger than the calendar portlet.

Steps to reproduce:

1\) load the uportal page from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) attempt to drag any portlet other than the calendar portlet. Notice that the lower portion of the avatar is missing.

        