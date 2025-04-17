---json
{
  "title": "SJRK-372",
  "summary": "Tests for the Page grade hang in event tests",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-07-02T17:08:47.758-0400",
  "updated": "2021-02-04T08:17:52.067-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-372/2020-07-02 page tests hanging edge 44.png",
      "filename": "2020-07-02 page tests hanging edge 44.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-372/2020-07-02 page tests hanging ipad.png",
      "filename": "2020-07-02 page tests hanging ipad.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-08-04T13:56:37.217-0400",
      "body": "With the completion of <https://fluidproject.atlassian.net/browse/SJRK-122#icft=SJRK-122>, this will be difficult to reproduce.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2021-01-11T10:54:22.929-0500",
      "body": "This issue was encountered by Giovanni Tirloni while working on his PR for <https://fluidproject.atlassian.net/browse/SJRK-446#icft=SJRK-446>, and it has been rearing its head in other PRs before that.\n\nI did some more testing today to try to reproduce it on my personal computer, but I was unable to make it happen. I tried repeated runs of the NPM script (\"npm test\") as well as dozens of runs each in Chrome 87, Firefox 84 and Edge 87. These in-browser tests were accomplished by serving the files via [browsersync](https://browsersync.io/), not the Storytelling Tool server.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-02-04T08:17:52.065-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/108> ) into the project repo at 6ed4d317be8539dbe8b61f80d3fb06d9cf8ce75b\n"
    }
  ]
}
---
The tests for the Page grade hang on the following test:

> "Test page grade: Test events and timing — at sequence position 8 of 24"

as well as

> "Test page grade: Test events and timing — at sequence position 13 of 24"

The particular event being waited on in both cases is "uio.prefsEditorLoader.messageLoader.events.onResourcesLoaded" after a language change. In this part of the sequence, there are two event listeners back to back, so it could be related to that, or it could simply be that the event immediately prior to it (menu.events.onControlsBound, to wait for that UI to finish rendering) is firing sometimes before and sometimes after UIO's onResourcesLoaded.

This issue doesn't always occur, and seems to be more frequent depending on the exact environment and browser. In Edge 44, it happens over 90% of the time, while in Firefox 78 it's more like 30%, and in Chrome 83 it seems to happen less than 10% of the time. This also only seems to occur when running the browser tests from the server hosting rather than hosting locally.

        