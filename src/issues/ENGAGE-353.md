---json
{
  "title": "ENGAGE-353",
  "summary": "Remove test-related code from the Code Entry component",
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
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:18:12.000-0500",
  "updated": "2010-02-12T14:09:03.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-353/ENGAGE-353.patch",
      "filename": "ENGAGE-353.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:18:30.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-11T09:02:43.000-0500",
      "body": "Attached <https://fluidproject.atlassian.net/browse/ENGAGE-353#icft=ENGAGE-353>.patch that removes the test code from the code entry component.\\\nThis patch makes obsolete the patch attached to:\n\n<http://issues.fluidproject.org/browse/ENGAGE-293>\n\nnamed  <https://fluidproject.atlassian.net/browse/ENGAGE-293#icft=ENGAGE-293>.native-couch-view\\.patch  as it applies the changes that it contains.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-11T20:21:22.000-0500",
      "body": "Committed the removal of test code from within the component, I had to do this manually as I had already started with and made changes to the out of data patch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:09:03.000-0500",
      "body": "I've reviewed Sveto's (and Justin's) fixes for this issue and they look good. There's probably more refactoring and improvement we can do to Object Code Entry to make it more testable in the long run, but it's great to see passing unit tests again! +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
There is some test-related code in the Code Entry component (the simulateCheck() function, for example). This should be removed from the component in preparation for production and implemented as a unit test instead.

        