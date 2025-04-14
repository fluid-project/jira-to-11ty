---json
{
  "title": "FLUID-577",
  "summary": "Upload button not disabled when 'remaining files' deleted after partial upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-05-13T10:26:23.000-0400",
  "updated": "2008-12-02T15:11:54.000-0500",
  "versions": [],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-01T09:14:12.000-0400",
      "body": "Appears to be resolved in latest build\n"
    }
  ]
}
---
If a multi-file upload is paused before all files are uploaded, and then all of the remaining files are deleted from the list (so that there are no files left to upload) the "Upload" button should become disabled again - currently, it doesn't.

        