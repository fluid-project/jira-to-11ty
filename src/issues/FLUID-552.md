---json
{
  "title": "FLUID-552",
  "summary": "Change styling of being-dragged portlet to be translucent in uPortal mock-up",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Daphne Ogle",
  "date": "2008-04-29T12:56:19.000-0400",
  "updated": "2008-05-19T11:20:03.000-0400",
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
      "date": "2008-05-14T15:50:08.000-0400",
      "body": "The style currently does set the opacity. There are cross-browser issues, and the opacity is not effective in IE.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-15T16:21:59.000-0400",
      "body": "Daphne, Gary's latest mockups actually specify that the 'left behind' copy of the portlet being dragged be removed. If you agree that that makes this bug a \"won't fix\" could you close it?\n"
    },
    {
      "author": "Gary Thompson",
      "date": "2008-05-19T11:20:03.000-0400",
      "body": "This issue is no longer valid as the dragged content does not remain in it's original place.\n"
    }
  ]
}
---
Replacing Fluid-524 to move under this implementation task rather under the design review task.

The portlet that is currently being dragged (the original one that is left in place, not the avatar) should be styled to be at 25% opacity. This should be easily accomplished through a change in the style, I think.

dev-iteration33

        