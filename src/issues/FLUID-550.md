---json
{
  "title": "FLUID-550",
  "summary": "Ensure that indication of locked portlets is *very* clear in the uPortal mock-up",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Daphne Ogle",
  "date": "2008-04-29T12:51:04.000-0400",
  "updated": "2008-05-27T16:10:53.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-16T10:55:31.000-0400",
      "body": "It seems that this requirement is not necessarily decided on yet. In his email of Wed, 14 May, titled \" \t Re: Finishing the Layout Customizer\", Gary wrote\n\n\"...I am leaning toward having locked portlets visually be no different than unlocked portlets, with perhaps the one change of replacing the remove icon (the red X) with a lock icon...\"\n\nI'm going to reduce this issue from Blocker to Major until the discussion is settled.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-27T11:33:26.000-0400",
      "body": "The locked portlet in the uPortal example looks different from the other portlets.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-27T16:10:53.000-0400",
      "body": "Visual style of locked portlet more distinct.\n"
    }
  ]
}
---
This replaces Fluid-522 which was a subtask of a design review.  Created a new implementation task and will recreate the subtasks and close the others (can't move a subtask).

In the uPortal 3 reorderable portlets mock-up, the indication of a locked portlet (currently a padlock icon) is not sufficient. We need to either implement the darkened portlet styling presented in the design mockups, or a popup message saying that the portlet cannot be moved.

dev-iteration33

        