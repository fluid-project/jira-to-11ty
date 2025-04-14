---json
{
  "title": "FLUID-4167",
  "summary": "Improve uploader unit test and add test for swfUploadStrategy.remote",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Harris Wong",
  "date": "2011-03-30T10:13:34.213-0400",
  "updated": "2014-05-22T14:29:52.705-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4163/",
      "key": "FLUID-4163",
      "summary": "Unit tests to cover HTML5 remote functionality"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-03-30T10:14:39.629-0400",
      "body": "This is related to the HTML5 test for the uploader\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:29:52.690-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
Improve tests for the Flash version uploader.

There is no tests for fluid.uploader.swfUploadStrategy.remote(swfUpload, queue, options), add a test to ensure the functions within remote() are initiated and called correctly with mocked objects.

        