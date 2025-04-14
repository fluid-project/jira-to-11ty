---json
{
  "title": "FLOE-542",
  "summary": "Remove conditional variable assignment from theme stylus file",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2018-02-23T15:32:24.478-0500",
  "updated": "2018-02-23T15:32:24.478-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Accessible Wordpress Theme"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the Wordpress theme, some variables are being defined using the conditional assignment which isn't necessary since the variables are not also being defined elsewhere. The variables should just be straight assignments.

Example:

main-nav-link-color ?= #00303C;

should be

main-nav-link-color = #00303C;

        