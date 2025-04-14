---json
{
  "title": "FLUID-6180",
  "summary": "For the mobile presentation of the separated panel UIO, closing and reopening should display the last selected adjuster",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-08-09T07:53:03.609-0400",
  "updated": "2017-11-06T08:17:24.450-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5534/",
      "key": "FLUID-5534",
      "summary": "responsive UIO: Add the arrow for the navigation"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-08-21T11:58:29.670-0400",
      "body": "I spoke with Dana and she suggested that the state of the panel should persist, similar to how the preferences persist.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-19T13:12:36.323-0400",
      "body": "A good portion of this has been achieved in <https://fluidproject.atlassian.net/browse/FLUID-5534#icft=FLUID-5534>. However, it only covers the case when scrolling is performed using the left/right arrow buttons. The remaining work is to ensure persistence when the adjuster is scrolled into view by other means (e.g. swiping, sliding, using the keyboard)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-06T08:17:24.447-0500",
      "body": "PR ( <https://github.com/fluid-project/infusion/pull/853> ) merged into project repo at 328153ec6b1a222c72b3da0e59b239124f1edebe\n"
    }
  ]
}
---
Currently for the mobile presentation of the separated panel, the first panel is always displayed. However, we should probably track the last panel used, and display that. At least in terms of it's state on an active page. Perhaps we don't need to track this after a page reload.

        