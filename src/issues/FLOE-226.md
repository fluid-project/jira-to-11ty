---json
{
  "title": "FLOE-226",
  "summary": "Use one shared dialog and tooltip across the feedback tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Cindy Li",
  "date": "2014-08-22T16:12:21.103-0400",
  "updated": "2020-11-04T18:20:18.530-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now, clicking each icon on the feedback tool triggers the creation of a new dialog and a new tooltip. Since the feedback tool only has one dialog or one tooltip appear at one time, it's simpler and easier to manage with having all icons share one dialog and one tooltip. This requires:&#x20;

1\. A templateLoader at the top level (the feedback component) to load all templates required by dialogs. From there on, operations would be synchronous;\
2\. Each icon click triggers the re-rendering of the corresponding dialog content.

        