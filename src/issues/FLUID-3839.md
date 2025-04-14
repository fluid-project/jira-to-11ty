---json
{
  "title": "FLUID-3839",
  "summary": "User test- Layout Reorderer displays both locked message and valid drop target simultaneously.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2010-11-15T16:38:20.444-0500",
  "updated": "2014-06-05T15:28:38.606-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3839/layout-reorderer-bug.png",
      "filename": "layout-reorderer-bug.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T14:02:57.267-0500",
      "body": "Currently when something is dragged over a locked element and dropped, it will go to the closest valid drop point. That is likely what is being displayed in the screenshot.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-19T15:47:29.405-0500",
      "body": "To make the interaction clearer to the user, the proposed solution is to remove the warning message and display the nearest drop marker if the user is hovering over a locked module during a drag and drop action.\n\nHowever, by removing the warning message, we are removing the demonstration of a Layout Reorderer feature. Thoughts?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-19T16:19:27.695-0500",
      "body": "More user testing is required to determine if this interaction is confusing or not. Changing the issue to reflect this.\n"
    }
  ]
}
---
In the Layout Reorderer Demo, when dragging and dropping a portlet, it's possible to get both a valid drop marker in one column, and a "can't place this portlet..." warning over the next column.

User testing should be performed to determine if this is a clear or confusing interaction.

        