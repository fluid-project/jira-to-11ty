---json
{
  "title": "FLUID-6025",
  "summary": "The aria-label of an uploaded file says \"... Press Delete key to remove file\" but the key command will not delete the file from the queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-11-02T12:18:49.346-0400",
  "updated": "2016-11-03T14:48:15.197-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 10 (macOS 10.12)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-985/",
      "key": "FLUID-985",
      "summary": "Convey the deletable and completed states for file rows"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-02T17:00:56.506-0400",
      "body": "According to this [story card](https://wiki.fluidproject.org/display/Infusion13/Uploader+Storycards#UploaderStorycards-story2) it seems that in fact we do not want to be able to delete the file from the queue after an upload has begun. Rather the label should be updated to not include the information about deleting the file.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-11-03T14:48:11.425-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/774> has been merged into the master branch at b7d67b0211a919939cdbc1adaf5d9bb6c315147f\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Uploader Demo](http://build.fluidproject.org/infusion/demos/uploader/)\
2\. Add a file to be uploaded\
3\. Upload the file\
4\. Using the keyboard place focus on the uploaded file in the file queue\
5\. Using the forward delete key on the keyboard, attempt to delete the file\
6\. Using the developer tools in the browser inspect the row for the file\
Notice that the file would not delete despite the aria-label indicating to "Press Delete key to remove file"

        