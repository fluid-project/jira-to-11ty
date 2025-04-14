---json
{
  "title": "FLUID-4713",
  "summary": "The fileSizeLimit specifies a size files must be smaller than, rather than the max size",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-23T15:09:09.057-0400",
  "updated": "2017-02-28T16:02:37.842-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-02-28T16:02:30.529-0500",
      "body": "Merged ( <https://github.com/fluid-project/infusion/pull/812> ) into the project repo at 81f4a143870966fda0ce8384916efd6eedc75586\n"
    }
  ]
}
---
According to the documentation (<https://wiki.fluidproject.org/display/docs/Uploader+API#UploaderAPI-queueSettingsOptions>), the fileSizeLimit should set the maximum size that a file can be. However, the uploader will only accept files that are smaller than this value.

        