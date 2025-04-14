---json
{
  "title": "FLUID-5467",
  "summary": "Factor out browser specific code from ProgressiveEnhancment.js",
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
  "reporter": "Justin Obara",
  "date": "2014-07-11T10:56:48.406-0400",
  "updated": "2021-06-22T13:44:46.839-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Progressive Enhancement"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-22T13:44:43.911-0400",
      "body": "Addressed with changes to <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249>\n"
    }
  ]
}
---
ProgressiveEnhancement.js contains browser specific tests, for example fluid.enhance.supportsBinaryXHR, fluid.enhance.supportsFormData and a method to hide markup (that is only there for cases when there is no javascript e.g. single file uploader).

These should be pulled out into a separate file to reduce confusion and chance of errors when the progressiveEnhancement is included as part of an infusion node module.

        