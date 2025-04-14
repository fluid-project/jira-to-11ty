---json
{
  "title": "FLOE-379",
  "summary": "At maximum text size, the fourth language option is partly visible on the language panel",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-06-05T10:17:27.760-0400",
  "updated": "2015-11-12T14:41:29.913-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-387/",
      "key": "FLOE-387"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-379/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-05T10:18:12.326-0400",
      "body": "screenshot.png shows the partially visible and interactive fourth language option, when text size is maxed.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:41:29.910-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1450> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool demo\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Navigate to the text size panel and set the text size to the maximum

3\) Navigate to the language panel.\
Notice that the fourth language option is now partially visible above the down arrow. You can also interact with it using the mouse.

        