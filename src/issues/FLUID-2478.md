---json
{
  "title": "FLUID-2478",
  "summary": "No visual cue for \"accordion\" affordance in UIOptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T14:42:49.000-0400",
  "updated": "2009-05-25T16:01:11.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-04-30T16:00:36.000-0400",
      "body": "This should be rectified when the FSS compatible jQuery UI CSS files are added to FSS/Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:53:37.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-20T14:46:16.000-0400",
      "body": "But there should also be a default appearance, when no other fss data is included\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T12:22:02.000-0400",
      "body": "The styling changes made for this fix look good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T16:01:11.000-0400",
      "body": "Verified fix using:\n\nIE 7, IE 8, FF3 (Win Vista)\\\nOpera 9.6, Safari 3.2 (Mac OS 10.5)\n"
    }
  ]
}
---
In the UIOptions component, two sets of options "Easier to see" and "Easier to find" are operated by an accordion control. However there is no visual cue when hovering over the title operating the control that more options will appear through clicking on it.

        