---json
{
  "title": "FLOE-421",
  "summary": "Add a package.json file to the first discovery tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Justin Obara",
  "date": "2015-09-24T10:00:11.779-0400",
  "updated": "2015-11-03T12:57:39.363-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-24T10:10:24.107-0400",
      "body": "A package.json file already existed.\n"
    }
  ]
}
---
In order for to pull in the first discovery tool via NPM, it needs to have a valid package.json file. This is required for the work on FLOE-420 which will attempt to pull in the first discovery via NPM and serve it inside an express app.&#x20;

        