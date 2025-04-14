---json
{
  "title": "FLUID-1538",
  "summary": "Avatar does not disappear immediately after drop",
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
  "date": "2008-09-10T12:56:34.000-0400",
  "updated": "2008-09-11T11:27:24.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE7 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T22:37:54.000-0400",
      "body": "This has been experimentally fixed at revision 5512 (untested since I have no IE7 here) - has it improved any?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T11:27:24.000-0400",
      "body": "Verified fix using:\n\nIE7 (Win XP, Win Vista)\n"
    }
  ]
}
---
Avatar does not disappear immediately after drop. It remains long enough to see it over top of the newly placed portlet.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Drag and drop any movable portlet. Notice that after dropping, the avatar does not disappear immediately

        