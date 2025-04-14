---json
{
  "title": "FLUID-5957",
  "summary": "Important values should be modelized and passed to string tempting functions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-09-15T08:50:37.649-0400",
  "updated": "2021-07-29T01:47:20.685-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5958/",
      "key": "FLUID-5958"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5370/",
      "key": "FLUID-5370",
      "summary": "Clean up backwards compatibility code for status messages"
    }
  ],
  "attachments": [],
  "comments": []
}
---
At the moment Uploader.js and related uploader scripts manually assemble token values for things such as, but not limited to:

* fileCount
* fileLabel
* totalBytes
* uploadedCount
* uploadedSize
* curFileN: that.queue.getUploadedFiles().length,
* totalFilesN
* errorString
* fileLabel
* totalCurrBytes
* uploadedCount
* uploadedSize
* totalCount

These should be modelized and passed to string template function calls to provide greater flexibility in what an integrator can hook into for output strings.

        