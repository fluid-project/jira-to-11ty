---json
{
  "title": "FLUID-521",
  "summary": "Ensure that the portlet drag avatar is directly under the dragging cursor in the uPortal mockup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-04-22T15:33:54.000-0400",
  "updated": "2008-04-29T12:54:18.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-487/",
      "key": "FLUID-487",
      "summary": "Avatar for dragged portlet a small, offset  solid grey rectangle in FF2"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-395/",
      "key": "FLUID-395",
      "summary": "Change avatar to small grey rectangle, as in mockups"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-487/",
      "key": "FLUID-487",
      "summary": "Avatar for dragged portlet a small, offset  solid grey rectangle in FF2"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-28T15:54:24.000-0400",
      "body": "This issue is being reduced in priority, because the preferred styling (of an avatar that is a transparent copy of the portlet) will eliminate this issue.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-04-29T12:54:18.000-0400",
      "body": "Replaced by Fluid-551\n"
    }
  ]
}
---
The avatar is not properly positioned under the cursor. This is actually caused by a bug in jQuery ( <http://dev.jquery.com/ticket/2643> ): jQuery's ui.draggable has a 'cursorAt' option should accomplish this behaviour, but it doesn't work if scroll is turned on (which it is in the Reorderer).  The ticket has actually been assigned now, so we should monitor it, and see if it is resolved soon. In the meantime, we need to find an alternative solution.

        