---json
{
  "title": "ENGAGE-281",
  "summary": "The navigationList shouldn't be concerned with additional elements that it isn't currently displaying",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-01-22T15:04:16.000-0500",
  "updated": "2014-03-03T14:14:39.236-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-22T15:23:33.000-0500",
      "body": "Removed the functionality to display a link to more\n"
    }
  ]
}
---
The navigationList shouldn't be concerned with additional elements that it isn't currently displaying

The navigationList currently has an option to display a link to more, but this shouldn't be the concern of the navigation list. This also causes problems when switching to grid view, and when displaying the default image.

        