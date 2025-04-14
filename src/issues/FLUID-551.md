---json
{
  "title": "FLUID-551",
  "summary": "Ensure that the portlet drag avatar is directly under the dragging cursor in the uPortal",
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
  "reporter": "Daphne Ogle",
  "date": "2008-04-29T12:52:14.000-0400",
  "updated": "2008-09-02T12:50:56.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-04-29T13:07:37.000-0400",
      "body": "This issue is being reduced in priority, because the preferred styling (of an avatar that is a transparent copy of the portlet) will eliminate this issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-03T19:45:28.000-0400",
      "body": "This seems to be fixed now. It should be tested using the manual test page, at\\\n<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/portal/simple-portlets.html>\\\nsince the uPortal example doesn't exhibit the problem.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-02T12:50:56.000-0400",
      "body": "This issue was fixed in jQuery UI.\n"
    }
  ]
}
---
Recreated Fluid-521 to move it under this implementation task rather than the design review task.

The avatar is not properly positioned under the cursor. This is actually caused by a bug in jQuery ( <http://dev.jquery.com/ticket/2643> ): jQuery's ui.draggable has a 'cursorAt' option should accomplish this behaviour, but it doesn't work if scroll is turned on (which it is in the Reorderer). The ticket has actually been assigned now, so we should monitor it, and see if it is resolved soon. In the meantime, we need to find an alternative solution.

        