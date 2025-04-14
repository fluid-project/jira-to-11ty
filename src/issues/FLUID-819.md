---json
{
  "title": "FLUID-819",
  "summary": "Don't show page links for few items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-24T20:59:45.000-0400",
  "updated": "2021-07-15T08:32:50.535-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3475/",
      "key": "FLUID-3475"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-702/",
      "key": "FLUID-702",
      "summary": "Create a simple pager component"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-24T21:00:49.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-702#icft=FLUID-702> referred to the requirement of not showing the page links if the total number of items in the list is less than the number of items shown per page, but the Pager implemented for 702 was mark-up driven, and hence couldn't implement this.\n"
    }
  ]
}
---
This is only valid when using the Pager in a 'data driven' mode.

Page links should only be shown if the total number of items in the list is less than the number of items shown per page.

        