---json
{
  "title": "SJRK-198",
  "summary": "Cannot publish a story if some files are uploaded but not all",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2019-01-23T16:20:31.405-0500",
  "updated": "2019-01-24T12:27:37.439-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2019-01-23T17:36:23.518-0500",
      "body": "<https://github.com/fluid-project/sjrk-story-telling-server/pull/7>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-24T12:27:37.428-0500",
      "body": "I have tested the updated public site and I am no longer seeing this issue.\n"
    }
  ]
}
---
This is another variant of <https://issues.fluidproject.org/browse/SJRK-182> and <https://issues.fluidproject.org/browse/SJRK-183>

 To reproduce:

* Begin a new story
* Add an image block
* Add a second image block
* Upload an image for the first block, but not the second
* Click "Continue"
* Click "Preview My Story"
* Click "Publish My Story"

        