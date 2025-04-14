---json
{
  "title": "FLUID-6121",
  "summary": "Document all deprecated APIs for the Infusion 2.0 release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-01-30T09:39:17.046-0500",
  "updated": "2017-02-08T11:57:11.281-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Release",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-02-08T11:57:03.829-0500",
      "body": "Merged <https://github.com/fluid-project/infusion-docs/pull/115>\n"
    }
  ]
}
---
As part of the Infusion 2.0 release, we need to document all of the APIs that are deprecated as of Infusion 2.0. We should create a page in Infusion Docs that summarizes the deprecations, and where appropriate mark the APIs within the docs as deprecated.

Things to deprecate:

* jQuery UI Slider version of textfieldSlider
* Progress component
* no-js version of Uploader

        