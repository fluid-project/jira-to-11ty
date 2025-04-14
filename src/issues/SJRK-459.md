---json
{
  "title": "SJRK-459",
  "summary": "blockUi-timeBased-Tests are failing in CI ",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-03-08T12:24:21.270-0500",
  "updated": "2021-03-15T11:19:11.846-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-03-08T12:28:39.659-0500",
      "body": "I tried the following possible solutions, the last one is the one that seemed to work.\n\n1. change the support check to test if canPlayType returns \"probably\".\n   1. Caused the tests to fail in Safari.\n2. provide multiple sources in the video element.\n   1. The video was still trying to use the mp4 format despite having access to both the mp4 and webm versions. It also didn't appear to matter what order the sources were added in.\n3. change the context check to see if webm is supported and fallback to mp4 instead of the other way around.\n   1. this appears to work.\n\n \n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-08T12:32:27.997-0500",
      "body": "Being worked on along with <https://fluidproject.atlassian.net/browse/SJRK-455#icft=SJRK-455>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-15T11:19:11.845-0400",
      "body": "Address in the PR for <https://fluidproject.atlassian.net/browse/SJRK-455#icft=SJRK-455>\n\nMerged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/114> ) at ffa60fe828fa816fadca949aaccbec6f682b7ebe\n"
    }
  ]
}
---
The blockUi-timeBased-Tests are timing out/failing in CI builds. (See: [fluid-work matrix discussion](https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$jfey1CEITPQgccin3rxcWOZ2f4urcOdmIhDSFEt3rTE?via=matrix.org)) These tests use a video file for the tests and have had issues in the past related to video format (See: <https://fluidproject.atlassian.net/browse/SJRK-122#icft=SJRK-122>). 

These test failures actually appeared without any new code being committed to the repo. However, the Ubuntu test runner was updated to use the latest version of FF, v86. The tests have a [context awareness check for mp4 support](https://github.com/fluid-project/sjrk-story-telling/blob/c33fe086d5cafd6fbb3b665ba854a2c9a29d4ecc/tests/ui/js/blockUi-timeBasedTests.js#L18-L29). However in this version of FF it the `canPlayType` function returns "maybe" instead of "". Which causes the check to pass and the mp4 file to be used. Running FF in Ubuntu requires the webM version to be used. 

Interestingly the tests pass after a page reload. Presumably that is enough to tell the browser that the video, in fact, will not play and provide the expected response to the canPlayType function. This is not suitable for the tests though.

        