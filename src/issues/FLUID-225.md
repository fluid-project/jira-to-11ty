---json
{
  "title": "FLUID-225",
  "summary": "Auto scroll for Portal window when moving a portlet up or down in a long list.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Barbara Glover",
  "date": "2008-02-11T10:02:07.000-0500",
  "updated": "2008-07-10T19:45:36.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-10/",
      "key": "FLUID-10",
      "summary": "Images don't fully scroll into view when selected"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-02T10:02:45.000-0400",
      "body": "This bug duplicates <https://fluidproject.atlassian.net/browse/FLUID-397#icft=FLUID-397>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-10T19:45:36.000-0400",
      "body": "Verified fix in FF2 (Mac OS X)\n"
    }
  ]
}
---
Moving portlets in a portal:\
When a user is moving a portlet around from the top of the portal area down to the bottom of the portal area the window should auto scroll.  Right now the user would have to drag the portlet to the desired location in steps because there's no way to drag the portlet with the mouse and also to scroll the screen at the same time.  The window should auto scroll up or down as the user drags the portlet.

        