---json
{
  "title": "FLOE-31",
  "summary": "The background image on the home page messes up the layout at font size increase",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2012-06-08T10:00:43.248-0400",
  "updated": "2012-10-18T11:26:27.803-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-31/Floe31Patch.txt",
      "filename": "Floe31Patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-06-29T10:22:40.664-0400",
      "body": "Fixed as part of <https://fluidproject.atlassian.net/browse/FLOE-9#icft=FLOE-9>\n"
    }
  ]
}
---
At home page, the two vertical lines besides the left and right menu are in one piece of background image which does not resize with the font size increase.

A possible solution is to use repeated one pixel image to generate the 2 vertical lines.

        