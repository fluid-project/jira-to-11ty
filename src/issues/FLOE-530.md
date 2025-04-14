---json
{
  "title": "FLOE-530",
  "summary": "Floe website needs improvements to markup (semantics and bug fixes)",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2017-08-23T14:27:25.327-0400",
  "updated": "2017-08-23T14:27:25.327-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the Floe website is lacking semantic markup in key areas. For example, the main content of News articles should be in \<article> elements instead of straight \<div> containers.

Also the "skip to content" link is missing its destination on many of the pages (i.e. id="content" is missing on the article divs).

 

        