---json
{
  "title": "FLUID-4002",
  "summary": "Adding files as a batch of uploads finishes does nothing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Erin Yu",
  "date": "2010-12-21T15:47:56.481-0500",
  "updated": "2015-06-09T10:13:03.428-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Safari5/OSX10.6 \\\nFF3.6/OSX10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:13:03.426-0400",
      "body": "This sounds like it was from the image gallery uploader demo, which no longer exists.\n"
    }
  ]
}
---
Current behaviour:\
When you click on "Add Files" just as the upload finishes, the file system dialog appears, and you can select additional files. In the mean time, the screen beneath the dialog moves on to display the uploaded files. Once the popup disappears, the "Add Information to Images" page with the previously uploaded files is displayed, but the newly selected files are nowhere to be found.

        