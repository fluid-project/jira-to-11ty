---json
{
  "title": "FLOE-394",
  "summary": "sticky keys activated on keyboard assessment screen",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-06-05T16:09:37.878-0400",
  "updated": "2015-11-12T14:36:41.977-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-394/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-05T16:10:26.219-0400",
      "body": "screenshot.png shows the stickyKeys simulator active not the assessment screen\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:36:41.975-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1464> and all activities should be carried on there.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the First Discovery Tool demo\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Navigate to the keyboard panel and enabled sticky keys

3\) refresh the browser

4\) Navigate back to the keyboard panel

5\) press the "shift" key\
Notice that the sticky simulation is activated on the input field.

This is likely a result of the fact that the stickyKeysEnabled preference is set and saved. However, the state of the keyboard panel isn't. The panel itself should have gone back to the screen where the user could enable/disable stickyKeys

        