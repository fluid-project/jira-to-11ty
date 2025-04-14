---json
{
  "title": "VP-9",
  "summary": "Clicking mute button activates keyboard-focus styling",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2012-10-31T10:17:53.106-0400",
  "updated": "2017-12-22T10:28:42.304-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "controls"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T10:28:42.302-0500",
      "body": "The video player repository has been archived.\n"
    }
  ]
}
---
We're using blue for keyboard focus, but the mute button turns blue when clicked on with mouse. This is inconsistent with the behaviour of the other buttons - it should be dark grey when hover/active, not blue.

        