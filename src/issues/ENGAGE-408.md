---json
{
  "title": "ENGAGE-408",
  "summary": "On an empty My Collection, grid/list toggle functionality should not exist",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "James Yoon",
  "date": "2010-02-19T10:43:48.000-0500",
  "updated": "2010-02-19T19:22:41.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T15:04:32.000-0500",
      "body": "this is bad – it actually pops the user out to the browser and reloads the page with all kinds of weirdness\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T15:05:36.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T18:39:47.000-0500",
      "body": "This is caused by an error in MyCollectionView.js:\n\nthat.navBar.events.onToggle.addListener(function () {\\\nthat.navigationList.toggleLayout();\\\n});\n\nWe're assuming that the Navigation List subcomponent is always instantiated. If the user's collection is empty, this is not the case. We should change the code to guard against this case, like this:\n\nthat.navBar.events.onToggle.addListener(function () {\\\nif (that.navigationList) {\\\nthat.navigationList.toggleLayout();\\\n}\\\n});\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T18:40:19.000-0500",
      "body": "Justin is also working on a fix that completely removes the grid/list toggle when the collection is empty, since it is unnecessary.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T18:41:47.000-0500",
      "body": "I committed the first half of this fix at r9458. Justin, can you review it for me?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-19T19:03:44.000-0500",
      "body": "reviewed Colin's commit at r9458. It looks good. My changes have resulted in some refactoring that Colin should probably review.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-19T19:22:07.000-0500",
      "body": "Added the second half of this fix that removes the toggle button if no artifacts have been collected.\n\nAssigning to colin for review.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T19:22:41.000-0500",
      "body": "I reviewed Justin's changes and they look good. +1\n"
    }
  ]
}
---

        