---json
{
  "title": "SJRK-216",
  "summary": "Add progress indicator on story submission",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-02-07T17:35:06.377-0500",
  "updated": "2019-02-25T13:33:39.571-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-228/",
      "key": "SJRK-228",
      "summary": "Address code review comments for SJRK-216"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-02-19T14:33:00.226-0500",
      "body": "[The server side pull request](https://github.com/fluid-project/sjrk-story-telling-server/pull/14) has been merged into the project repo at [this commit](https://github.com/fluid-project/sjrk-story-telling-server/commit/c0543b572b7c1ddbc8953abd90556dcbb880f4d0).\n\n[The client side pull request](https://github.com/fluid-project/sjrk-story-telling/pull/16) has been merged into the project repo at [this commit](https://github.com/cindyli/sjrk-story-telling/commit/0a595a6bc6b44dd86a391858eee109bb0d277d6f).\n\nHowever, some code review comments on the client side pull request haven't been addressed. <https://fluidproject.atlassian.net/browse/SJRK-228#icft=SJRK-228> has been created for these comments addressed when Gregor Moss comes back from vacation.\n"
    }
  ]
}
---
From user feedback: "The most confusing thing I’m finding is not getting feedback when I hit publish. I can’t even tell if I’ve pressed it so I found myself pressing it multiple times (even though I knew this was an issue)."

Add a progress indicator of some kind when the story has been submitted for publishing (i.e. when you click "Publish my story"). Consult with Sepideh Shahi for a potential design.

Options could include:

* a progress bar (would need to keep track of chunks of data, or otherwise estimate progress)
* a spinner animation (easier)
* a static message that says the submission is in progress (easiest, but least elegant)

        