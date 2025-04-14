---json
{
  "title": "FLUID-6019",
  "summary": "Demos using other languages (e.g. lorem ipsum) should add appropriate lang attributes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-02T09:25:37.619-0400",
  "updated": "2016-11-02T09:26:39.956-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6010/",
      "key": "FLUID-6010",
      "summary": "Address all HTML validation across all HTML pages, templates, and fragments "
    }
  ],
  "attachments": [],
  "comments": []
}
---
Some of the demos make use of lorem ipsum as filler text. These should set appropriate lang attributes to inform the system of what language is used in those sections. For example if lorem ispum, the container for that text can specify the latin language like: `<section lang="la">`. Similar for any other language used in the demos.

        