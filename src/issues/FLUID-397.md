---json
{
  "title": "FLUID-397",
  "summary": "Auto-scroll current drop target into view when dragging",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-03-24T11:07:07.000-0400",
  "updated": "2011-01-26T11:07:25.759-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-28T15:47:12.000-0400",
      "body": "I'm thinking of using the jQuery plugin ScrollTo to fix this bug. <http://plugins.jquery.com/project/ScrollTo>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-28T16:22:29.000-0400",
      "body": "The ScrollTo plugin is still in beta and does not meet our needs yet. Although in many cases the plugin works just fine, it causes stuttering and does not scroll enough when trying to drop a portlet below the 'Bookmarks' portlet in the uPortal new skin example. This is almost the same experience as when I tried using 'scrollIntoView'.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-31T16:13:54.000-0400",
      "body": "Scrolling works when using the current (5158) revision of jQuery UI's trunk. The user experience is not great on the Mac but works very well on Windows FF and IE.&#x20;\n"
    }
  ]
}
---

        