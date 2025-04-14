---json
{
  "title": "FLOE-578",
  "summary": "Unnecessary  CSS properties declared. ",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Sachin Chopra",
  "date": "2020-03-01T17:43:14.211-0500",
  "updated": "2020-09-23T08:53:09.449-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-09-23T08:53:09.446-0400",
      "body": "Closing in favour of [Migrate from Foundation to custom CSS and components.](https://github.com/fluid-project/floeproject.org/issues/184)\n"
    }
  ]
}
---
In floeproject.org/css/style.css

While designing floe-header (line 61), the display has been set to inline. 

When the display is set to inline. With 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect.

        