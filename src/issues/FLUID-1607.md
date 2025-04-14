---json
{
  "title": "FLUID-1607",
  "summary": "Quick clicking the undo/redo link breaks its functionality in Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-09-24T13:58:11.000-0400",
  "updated": "2008-12-12T16:30:54.000-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.5 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1917/",
      "key": "FLUID-1917",
      "summary": "Quickly removing files from the file queue causes removal to break and throw an error"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-24T13:58:56.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-24T14:00:58.000-0400",
      "body": "Perhaps it would help if event propogation is stopped immediately after our event, preventing the text selection from happening?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T13:52:50.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-12T14:03:44.000-0500",
      "body": "Opera delivers two \"click\" events \"back-to-back\" - that is, before reflecting any visibilty changes for button states in the UI. As a general recommendation, the \"model\" for any component should be resistant to corruption from any combination of events incoming from the outside, even if it believes it issues control requests to destroy or hide the relevant triggering controls.\n\nFixed at revision 6209\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T16:30:54.000-0500",
      "body": "The commit was code reviewed by Colin Clark (only needed to be linted)\n\nAfter linting,\n\nI Verified the fix using\n\nOpera 9.5 (Win XP)\n"
    }
  ]
}
---
Quick clicking the undo/redo link breaks its functionality. It will still change between undo and redo, but the value of the inline edit field will remain the same.

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit one of the inline edit fields and press enter to save the value

3\) Quickly and repeatedly click the undo/redo link

Notice that soon you get a context sensitive menu and the functionality of the undo/redo button is broken. This context sensitive menu is the same that appears if you double click plain text on the page.

        