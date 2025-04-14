---json
{
  "title": "FLUID-3894",
  "summary": "Delete during upload with keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Harris Wong",
  "date": "2010-12-10T17:24:58.112-0500",
  "updated": "2011-01-05T11:25:45.018-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF 3.6.12\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-05T11:25:45.017-0500",
      "body": "Duplicate JIRA.   See <https://fluidproject.atlassian.net/browse/FLUID-3699#icft=FLUID-3699>.\n"
    }
  ]
}
---
Uploader allows keyboard to delete files during upload.

To reproduce, go to: <http://build.fluidproject.org/infusion/demos/uploader/demo.html>,\
1\. Click "Browse" and select a few files.\
2\. Click "Upload" once there is a list of files in the uploader. \
3\. Tab (with keyboard) into the file section and press "Delete" on your keyboard.

You will notice you can delete all the items from the uploader, including the one that's uploading.

        