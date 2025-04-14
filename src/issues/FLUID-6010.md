---json
{
  "title": "FLUID-6010",
  "summary": "Address all HTML validation across all HTML pages, templates, and fragments ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-10-28T09:05:41.485-0400",
  "updated": "2016-11-02T09:26:39.977-0400",
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
      "url": "/browse/FLUID-6001/",
      "key": "FLUID-6001",
      "summary": "Implement a system for automatically linting/validating  HTML "
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6019/",
      "key": "FLUID-6019"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Examine all of the HTML documents, templates, and fragments used throughout the code base and ensure that all of them pass HTML validation. This should be performed both on the static content and the render DOM ( for all states ). The \[Nu HTML Checker Bookmarklet|Nu HTML Checker Bookmarklet] can be used to find errors.&#x20;

        