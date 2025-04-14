---json
{
  "title": "ENGAGE-495",
  "summary": "Home should have 3 elements in a row, not 2.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2010-03-05T12:54:05.000-0500",
  "updated": "2010-03-09T15:20:43.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Home Screen",
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-495/ENGAGE-495.patch",
      "filename": "ENGAGE-495.patch"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-03-05T12:55:12.000-0500",
      "body": "This patch also has a minor stylistic tweak that spaces the grid view a little better (more centered)\n"
    }
  ]
}
---
Home should have 3 elements in a row, not 2. This happens because nav list styling is present on home page when nav list is not used (one of the common css file in screen navigator). In order to fix it nav list styling should be scoped properly to where it should be used.

        