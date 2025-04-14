---json
{
  "title": "FLUID-1703",
  "summary": "Design:  Update simple text inline edit designs based on user testing results",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Daphne Ogle",
  "date": "2008-10-23T13:49:58.000-0400",
  "updated": "2013-04-11T17:53:03.644-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1764/",
      "key": "FLUID-1764",
      "summary": "UNDO: need to attach a custom event to Undo based on events in Inline Edit"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-10-23T13:50:20.000-0400",
      "body": "iteration21\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-10-28T19:04:21.000-0400",
      "body": "Next iteration done.  Meeting with Allison and Eli to review in next iteration.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-10-30T18:43:38.000-0400",
      "body": "Reopening for implementation of the demo\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-03T13:44:48.000-0500",
      "body": "Checked in the first round of changes to the InlineEdit Section Info sample code for user testing:\n\nPlease note: Much of this design is implemented as overrides to the default behaviors for InlineEdit and Undo. Once we have some test results we should decide whether some of these changes should be rolled into the components as the new defaults.\n\nStill to do:\n\n* Success message feedback when items are edit, undone, or redone. (Need better feedback from components as to which elements the event was fired on.)\n* Hiding Undo and Redo icons during edit as Undo and Redo are ambiguous during actual editing.  (written up as <https://fluidproject.atlassian.net/browse/FLUID-1764#icft=FLUID-1764>)\n"
    }
  ]
}
---
This is in prep for the next round of testing in iteration 22.

        