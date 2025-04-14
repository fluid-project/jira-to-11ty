---json
{
  "title": "FLUID-6026",
  "summary": "The set of files not added to the file queue is a comma separated string instead of an HTML list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-02T12:23:06.622-0400",
  "updated": "2016-11-02T12:23:49.786-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6026/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-02T12:23:49.786-0400",
      "body": "screenshot.png shows the files not added as a comma separate string.\n"
    }
  ]
}
---
If a file(s) is not added to the file queue it is mentioned in a warning below the file queue. This can happen when the file exceeds the max file size or any other configurable restriction. The set of files is represented as a comma separated string in a \<p> tag. However, this would be more semantically represented as an HTML list (e.g. \<ul>\<li>\</li>\</ul>)

        