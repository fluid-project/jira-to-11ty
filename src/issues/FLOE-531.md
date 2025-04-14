---json
{
  "title": "FLOE-531",
  "summary": "Refactor the BIG IDeA theme markup from parent and consolidate changes",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2017-11-10T14:36:12.445-0500",
  "updated": "2018-06-26T11:16:59.256-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Accessible Wordpress Theme"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SNOW-17/",
      "key": "SNOW-17"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Clean up the wp-a11y Theme and refactor BIG IDeA specific markup into the BIG IDeA child theme.

Applies to the repositories:

* [wp-a11y theme](https://github.com/jhung/wp-a11y-theme/tree/FLOE-531) (github FLOE-531 branch) - refactor stuff from here
* [BIG IDeA WP Theme](https://github.com/jhung/big-idea-theme/tree/FLOE-531) (github FLOE-531 branch) - put refactored stuff in here

Confirm that refactoring is complete by enabling just the wp-a11y-theme and checking that all BIG IDeA content / styling is gone.

        