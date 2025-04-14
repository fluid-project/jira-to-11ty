---json
{
  "title": "SJRK-265",
  "summary": "Refactor and break up storyTellingServerUI.js",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Gregor Moss",
  "date": "2019-07-29T17:40:33.767-0400",
  "updated": "2020-01-24T13:34:43.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-01-24T13:34:42.997-0500",
      "body": "This was effectively duplicated by <https://fluidproject.atlassian.net/browse/SJRK-320#icft=SJRK-320>. As work has already begun with that Jira number, this issue will be closed. Please refer to <https://fluidproject.atlassian.net/browse/SJRK-320#icft=SJRK-320> for further progress\n"
    }
  ]
}
---
The contents of storyTellingServerUI.js are unwieldy and would better be placed in different files according to when and how they are used. This may involve the use of events and attaching to the onCreate event of page components or another approach.

From [pull request feedback](https://github.com/fluid-project/sjrk-story-telling/pull/33#discussion_r308400547) provided by @@Cindy Li:

> ... I actually think all functions in this file can be moved into components and all workflows can be incorporated and controlled by individual components. Use "Browse story" as an example:

1. move the fetch of "/clientConfig" into "sjrk.storyTelling.base.page" `onCreate` event;
2. The retrieval of stories to "/stories" endpoint can be moved to "sjrk.storyTelling.base.page.storyBrowse" component, in parallel with the fetch of "/clientConfig". It also fires an event "onStoriesReady" when stories are received.
3. The aggregate event for{{onClientConfigReady + onStoriesReady}} controls other parts such as the load of custom theme files, the instantiation of templateManager and the page rendering.

        