---json
{
  "title": "SNOW-17",
  "summary": "Update the Snow child theme to work with the refactored wp-a11y theme",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2018-03-20T09:38:49.680-0400",
  "updated": "2018-06-26T11:19:23.335-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-531/",
      "key": "FLOE-531",
      "summary": "Refactor the BIG IDeA theme markup from parent and consolidate changes"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The Snow theme was created from a version of the wp-a11y theme which contained a lot of BIG IDeA content. The BI content has since been refactored into its own theme, therefore the wp-a11y parent theme has changed.

The Snow theme should be updated to use this new refactored wp-a11y theme. The BIG IDeA theme is the first child theme to use this refactored parent and should be consulted as an example child theme implementation.

This issue depends on the work from <https://fluidproject.atlassian.net/browse/FLOE-531#icft=FLOE-531> being merged into the Foundation branch first.

        