---json
{
  "title": "FLOE-557",
  "summary": "Wordpress only allows posts (and not pages) to have custom metadata",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Eloisa Guerrero",
  "date": "2018-07-06T11:53:18.011-0400",
  "updated": "2018-07-06T11:53:18.011-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Originally found in [SNOW-26](https://issues.fluidproject.org/browse/SNOW-26)

Jonathan Hung and I found that as a limitation of Wordpress, only posts can support custom metadata (the "is\_landing\_page" custom field) and so only posts can be landing pages. We will need to figure out a way to generate landing pages from page types as well but that will require a custom metadata from pages and will need to extract that into a query. This will require at least a week's worth of work.

Also there needs to be a better way of handling landing pages because there can be multiple landing pages for the same category and there is no easy way to determine which one Wordpress will decide to use.

        