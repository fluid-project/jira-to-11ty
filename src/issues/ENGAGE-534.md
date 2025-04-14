---json
{
  "title": "ENGAGE-534",
  "summary": "Refactor the public api, removing unnecessary and dangerous functions",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-03-25T10:47:45.000-0400",
  "updated": "2014-03-03T13:44:00.309-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-25T13:18:54.000-0400",
      "body": "There is now only one movement function, positionDrawers. The toggle function remains in the code, but is not accessible publicly. It is still used internally.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-25T13:19:11.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T17:18:47.000-0400",
      "body": "The \"toggle\" function is just as dangerous and wasteful in private code (if not more so the latter 😛) than in public. It should be removed entirely, and replaced with two separate utilities, one to read the current state of a drawer from the DOM (embodying the elm.hasClass branch) and another to write it. In addition, the open/close utilities should simply be folded into the \"position\" method. Also the current implementation is broken - the \"position\" method called from that.positionDrawers calls through to a method which is actually named \"drawerAdjust\". Please supply test cases for new functionality in future 🙂\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T17:19:16.000-0400",
      "body": "Apologies - looks like there are functioning test cases for the new functionality - however, I suggest it would be a clearer implementation if the positional arguments were strings, and the toggle, open and close methods were removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-26T12:23:15.000-0400",
      "body": "Refactored public api again. There are now functions to setDrawers and getDrawerState.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-26T12:23:28.000-0400",
      "body": "assigned to Antranig for review\n"
    }
  ]
}
---
Refactor the public api, removing unnecessary and dangerous functions

The toggle function can lead to a confused state of the drawers.

The close and open functions should be distilled into a single adjust function that takes constants refering to the open and closing of drawers.

        