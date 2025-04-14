---json
{
  "title": "FLUID-5756",
  "summary": "Move mockTTS from tests directory to the TextToSpeech source directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-09-03T12:53:34.771-0400",
  "updated": "2017-02-27T15:49:17.207-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-03T13:00:39.279-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/632>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-09T07:39:39.219-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/632> ) was merged into the project repo at 6273ecc911990511481e25d8da1c11ab4b9f74b3\n"
    }
  ]
}
---
Currently the mockTTS lives in the test directory for the TextToSpeech component. However, for integrators using a custom build of Infusion including the TextToSpeech component, they will not have access to the mockTTS for using in their tests. It should instead be moved to the TextToSpeech's source directory so that it will passed along with the build.

        