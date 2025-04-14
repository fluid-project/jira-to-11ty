---json
{
  "title": "FLUID-2409",
  "summary": "OSDPL: Deleting all images and uploading new images causes an unspecified error.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-03-25T13:06:50.000-0400",
  "updated": "2014-04-02T16:35:53.937-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If all images in either Examples or Solution are deleted, submitting the form will cause an unspecified error. The effect of this is upon submit, the UI is changed back to the 1st tab and no changes are saved.

This problem occurs even if new images are uploaded to take the deleted image's place.

The root cause of this is the custom validation code no properly checking the existance of images in the form field array.

        