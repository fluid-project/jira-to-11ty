---json
{
  "title": "SJRK-32",
  "summary": "Add file/media upload ability",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Alan Harnum",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:42:41.706-0400",
  "updated": "2018-05-25T14:55:06.828-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-66/",
      "key": "KETTLE-66"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-12-14T11:29:16.149-0500",
      "body": "I propose we handle this by creating a Kettle middleware wrapper for <https://github.com/expressjs/multer,> the standard Express middleware for handling multipart/form-data uploads.\n\nThis would model how Kettle wraps some of the other standard Express middleware like body-parser.\n\nA basic demo of this is in this branch/file - this should be expanded into a full middleware wrapper and contributed back to Kettle: <https://github.com/waharnum/sjrk-story-telling-server/blob/multer/src/js/middleware.js>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-12-14T11:33:03.056-0500",
      "body": "Sounds very good to me!\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-04-23T20:47:56.351-0400",
      "body": "Seeing as how an uploader grade has been added and implemented at least for the uploading of image files, I propose closing this issue and then filing a Jira each for file validation and for restricting files based on file type.\n\nThere are already separate Jiras for uploading video (<https://fluidproject.atlassian.net/browse/SJRK-27#icft=SJRK-27>) and audio (<https://fluidproject.atlassian.net/browse/SJRK-31#icft=SJRK-31> and <https://fluidproject.atlassian.net/browse/SJRK-10#icft=SJRK-10>)\n"
    }
  ]
}
---
Add capability to upload a media file (video, audio, image), to validate the type, to restrict the available files based on type, etc.

Possibly relevant, possibly out of date: <https://docs.fluidproject.org/infusion/development/UploaderAPI.html>

Consider native browser interface options

        