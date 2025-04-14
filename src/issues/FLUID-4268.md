---json
{
  "title": "FLUID-4268",
  "summary": "Uploader's monitorFileUploadXHR() and related code should be refactored into a component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-05-27T09:52:46.179-0400",
  "updated": "2014-04-02T15:51:27.123-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-27T11:21:46.407-0400",
      "body": "Bug Parade Infusion\n"
    }
  ]
}
---
At the moment, Uploader has a function called fluid.uploader.html5Strategy.monitorFileUploadXHR(), which serves as an adapter between raw XHR event and the higher-level events of the Uploader. It should be refactored as a component, simplifying its implementation and making it easier to customize.

        