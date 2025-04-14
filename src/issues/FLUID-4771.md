---json
{
  "title": "FLUID-4771",
  "summary": "During upload, delete button should be dimmed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2012-08-15T16:04:13.435-0400",
  "updated": "2015-06-12T11:29:39.071-0400",
  "versions": [
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
      "date": "2015-06-12T11:29:39.069-0400",
      "body": "The delete button is dimmed, although it may be too subtle.\n"
    }
  ]
}
---
While the Uploader is in the process of uploading, you can't delete files from the queue, but the delete button still looks active. It should be dimmed (or delete should be permitted).

        