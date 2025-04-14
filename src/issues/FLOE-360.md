---json
{
  "title": "FLOE-360",
  "summary": "When the black-on-white or white-on-black contrast is enabled, the active styling for the current panel's icon is missing.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2015-05-28T12:56:29.486-0400",
  "updated": "2015-11-03T12:52:53.278-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-392/",
      "key": "FLOE-392"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-360/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-28T12:57:56.106-0400",
      "body": "screenshot.png shows that the icon for the current panel does not have all of the active styling. It only has the arrow pointing at it (when in a contrast mode).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-01T11:04:26.114-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/74> ) into the project repo at efde6dfd3906a6ae200e4252ac5f6fb57a2d6e52\n\nThis improves the active styling, but does not yet fully bring it inline with the designs. (which is why the jira is still open).\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool demo

2\) Navigate to the contrast panel

3\) Enable either of the contrasts\
Notice that the active styling on the panel's icon is missing. The arrow pointing at the icon is still present though. The designs have a border around the icon and it is slightly larger.

<http://wiki.fluidproject.org/download/attachments/40797428/FD%20tool%20for%20May%202015%20workshop%20v3.pdf?version=2&modificationDate=1432147626947&api=v2>

        