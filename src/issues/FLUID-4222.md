---json
{
  "title": "FLUID-4222",
  "summary": "A variety of Uploader tests are failing in Internet Explorer 6 due to json2.js now being required by the framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-05-11T12:02:46.405-0400",
  "updated": "2011-05-11T12:08:56.653-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-05-11T12:08:51.138-0400",
      "body": "Committed and pushed into the project repo at revision a70c22bf26715d7a8301a413f66b788b1e6d20eb\n"
    }
  ]
}
---
Most Uploader tests don't include json2.js, despite it having been recently introduced as an Infusion-wide dependency. This causes them to fail in Internet Explorer 6, which doesn't include a native JSON implementation.

        