---json
{
  "title": "FLUID-18",
  "summary": "ARIA Roles: add roles related to drag and drop",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2007-06-29T06:46:41.000-0400",
  "updated": "2007-10-22T15:53:31.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-01T14:31:56.000-0400",
      "body": "dojo 0.9 may add ARIA roles. This should be re-examined after we upgrade.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-01T14:33:22.000-0400",
      "body": "Even if dojo adds ARIA roles and updates them appropriately on drag/drop, we need to ensure that they are also updated on keyboard access\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-04T15:57:06.000-0400",
      "body": "The states are set and updated appropriately.\n"
    }
  ]
}
---
Any ARIA roles/states related to drag and drop still need to be added to the lightbox. This may include changes to the demo file itself, changes to the event handlers to ensure that the roles remain assigned to the correct nodes, and related tests.

        