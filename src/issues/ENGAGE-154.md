---json
{
  "title": "ENGAGE-154",
  "summary": "Add the Engage navigation bar component to My Collection",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-21T13:19:16.000-0400",
  "updated": "2010-02-17T10:14:38.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-161/",
      "key": "ENGAGE-161",
      "summary": "Create a component for providing persistent navigation with a mobile web application"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-154/ENGAGE-154.patch",
      "filename": "ENGAGE-154.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:23:42.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-12T10:22:13.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-154#icft=ENGAGE-154>.patch adds the navigation bar sub-component  to My Collection.\\\nAlso a bug was fixed in the artifact view service that returned a null value for the strings options value.\\\nThe empty collection image was styled.\\\nFinally the html, css and javascript for My Collection was cleaned up to get rid of unnecessary code.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-17T09:25:33.000-0500",
      "body": "Patch <https://fluidproject.atlassian.net/browse/ENGAGE-154#icft=ENGAGE-154>: Navigation bar added to My Collection, also the status message was removed and only in the case of an empty collection a status is shown. Added style sheet for navigation list.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-17T10:14:16.000-0500",
      "body": "I committed Sveto's patch for this issue at r9419.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-17T10:14:38.000-0500",
      "body": "I reviewed Sveto's changes and they look good. +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
The Navigation Bar component provides the ability to go home, back, and toggle between list and grid. My Collection should be updated to use this component instead of using its own custom logic.

        