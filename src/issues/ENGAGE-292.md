---json
{
  "title": "ENGAGE-292",
  "summary": "Implement Navigation Bar",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-26T10:50:06.000-0500",
  "updated": "2010-02-12T14:12:15.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Browse",
    "Catalogue",
    "Exhibitions",
    "Mobile"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-292/fe_mobile_icon_back.png",
      "filename": "fe_mobile_icon_back.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-292/fe_mobile_icon_grid.png",
      "filename": "fe_mobile_icon_grid.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-292/fe_mobile_icon_home.png",
      "filename": "fe_mobile_icon_home.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-292/fe_mobile_icon_list.png",
      "filename": "fe_mobile_icon_list.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:21:41.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-08T11:05:56.000-0500",
      "body": "Attached icons fixed at 26x26 pixels.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-10T11:21:32.000-0500",
      "body": "Committed the new icons at r9342\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-10T12:07:33.000-0500",
      "body": "A new set of icons were added that are 25x25 instead of 26x26. these were committed at r9343\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T14:12:15.000-0500",
      "body": "Code reviewed.\n\nIt looks good, there was a spelling mistake and a missing semi-colon, that I'll fix with the clean-up jira.&#x20;\n\nThere were already comments about hard coded bits and DOM fascism in the code, that indicate areas of concern for later.\n"
    }
  ]
}
---
The mobile wireframes contain a navagation bar at the top of each screen. The options available on the navigation bar depend on the particular screen. We should likely implement this by providing some general functions and CSS that each screen can use and by putting the actual nav bar into the html for each screen.&#x20;

Bug Parade Engage 0.3&#x20;

        