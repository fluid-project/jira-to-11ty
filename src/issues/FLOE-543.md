---json
{
  "title": "FLOE-543",
  "summary": "Refactor mixins from wp-a11y theme so it can be imported directly into child themes",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2018-02-23T16:08:28.841-0500",
  "updated": "2018-02-23T16:08:28.841-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently there are mix-in functions in the wp-a11y theme which are useful for child themes, but can't be accessed by the child theme. This means child themes need to duplicate these mixins.

Ideally, these mixins should be refactored into separate files so it can be imported into child themes using stylus.

For example, the apply-contrast-colours() mixin should be refactored.

        