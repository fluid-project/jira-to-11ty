---json
{
  "title": "FLOE-2",
  "summary": "Ensure that Authoring Tooll adds alt-text to images",
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
  "reporter": "Anastasia Cheetham",
  "date": "2012-03-21T11:20:45.043-0400",
  "updated": "2012-10-18T11:42:33.755-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently, the OER Commons authoring tool prompts the user for a caption for images, but does not create any alt text for the image. We need to (as a first step) use the caption text added by the author as the alt text.

This work is to be carried out in a fork of the OER Commons github repo:\
<https://github.com/ISKME/OER-Commons>\
in the 'authoring\_accessibility' branch.&#x20;

        