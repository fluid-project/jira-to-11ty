---json
{
  "title": "FLOE-359",
  "summary": "The white background in the navbar does not extend fully to the right when not enough icons",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Jonathan Hung",
  "date": "2015-05-28T11:47:30.405-0400",
  "updated": "2015-11-03T12:43:15.550-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-359/Screen Shot 2015-05-29 at 2.37.03 PM.png",
      "filename": "Screen Shot 2015-05-29 at 2.37.03 PM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-359/Screenshot 3 - Safari.jpeg",
      "filename": "Screenshot 3 - Safari.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-06-01T11:11:15.104-0400",
      "body": "the scrolling issue needs to be split out into a separate jira\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-02T14:26:40.712-0400",
      "body": "Merged the pull request <https://github.com/fluid-project/first-discovery/pull/79> @ 1ce657cebbc24d72129d8ec78430eff1be9174a9\n"
    }
  ]
}
---
If there are not enough icons in the icon bar, the white background of the icon bar does not extend fully to the right. The bar should go to the right as it appears elsewhere.

The fix for this issue should also fix the following related issue: \
If the size is decreased, then when moving to the next step the nav bar isn't scrolled enough to see the icon for that step.&#x20;

        