---json
{
  "title": "STUDIO-2",
  "summary": "The Fluid Studios WordPress theme uses a larger-than necessary bundle of Infusion 1.4",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-12-03T13:34:34.684-0500",
  "updated": "2014-03-03T13:02:14.126-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-05T11:55:39.338-0500",
      "body": "Merged into project repo at 5a13eea631f6ce7aced9c8266f240377b77dc6c0\n"
    }
  ]
}
---
Our custom Infusion bundle was inherited from FSSFive, which until recently used a non-minified, slightly larger than necessary version of 1.4. We should trim out any extra JS and theme files, use the minified version, and ensure that our UI Options configuration is as simple as possible.

        