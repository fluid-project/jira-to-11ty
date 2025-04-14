---json
{
  "title": "IDI-57",
  "summary": "Fix placement of preferences button as things change in UIO",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-20T18:55:11.695-0400",
  "updated": "2020-02-15T04:04:52.240-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IDI site"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-05-25T10:43:28.797-0400",
      "body": "A temporary fix for the effects of font size changes has been implemented, but it is not ideal: As the font is adjusted, the button slides back and forth across the screen. It would be good to find a more proper solution.\n"
    }
  ]
}
---
UIO max font causes prefs button to move off-screen. Also, in high contrast themes in IE (6-7), the prefs button doesn't move up and down properly as the panel opens and closes

        