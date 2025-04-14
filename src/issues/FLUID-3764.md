---json
{
  "title": "FLUID-3764",
  "summary": "Implement sketch of inlineEdit fix using a tooltip",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-09-29T13:55:45.417-0400",
  "updated": "2010-10-07T13:19:05.934-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:00:26.217-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T11:00:44.705-0400",
      "body": "Appended an image button to the end of the inline edit container. The inline edit is now more screen reader friendly as the button is given an ARIA role of button and the inline edit container is given an ARIA tooltip.  This branch has been merged into trunk and will now be deleted from the incubator.  See <https://fluidproject.atlassian.net/browse/FLUID-2652#icft=FLUID-2652> for more information.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-07T13:19:05.932-0400",
      "body": "The tooltip branch is now in trunk\n"
    }
  ]
}
---
Implement the inline Edit fix using a tooltip for saving instruction while in edit mode.

        