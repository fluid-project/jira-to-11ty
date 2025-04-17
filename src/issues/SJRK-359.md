---json
{
  "title": "SJRK-359",
  "summary": "Add drag & drop for block reordering",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-05-27T14:02:22.317-0400",
  "updated": "2020-07-14T01:42:32.452-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-288/",
      "key": "SJRK-288",
      "summary": "Add block reordering functionality"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-359/StorytellingTool_drag drop handle-11.png",
      "filename": "StorytellingTool_drag drop handle-11.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-359/StorytellingTool_UpdatedUI_V12_DA-20.svg",
      "filename": "StorytellingTool_UpdatedUI_V12_DA-20.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-359/StorytellingTool move block down.svg",
      "filename": "StorytellingTool move block down.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-359/StorytellingTool move block up.svg",
      "filename": "StorytellingTool move block up.svg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-06-02T08:37:54.934-0400",
      "body": "Gregor Moss perhaps the [Layout Reorderer](https://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/) might be a closer example of what you're looking for.\n"
    },
    {
      "author": "Dana",
      "date": "2020-06-10T14:24:43.274-0400",
      "body": "Gregor Moss I attached an updated mockup to show the drag and drop handle positioning, as well as assets for handle, up arrow, and down arrow.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-06-30T15:40:47.850-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/84) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/124ca75934d39db06645c1cd017a7966efa6da49).\n"
    }
  ]
}
---
Add drag & drop functionality to the block reordering. This should be tackled after <https://fluidproject.atlassian.net/browse/SJRK-288#icft=SJRK-288> and <https://fluidproject.atlassian.net/browse/SJRK-358#icft=SJRK-358> have been completed.

The [Infusion Reorderer demo page](https://build.fluidproject.org/infusion/demos/reorderer/listReorderer/) demonstrates drag & drop being used on individual list items, and can be used as a reference for programming this feature.

The nature of the block editors (with their many inputs, images, media players, etc.) makes the "grab the element anywhere" aspect a little impractical. Instead, consider a "move block" icon in the top-right of each block, where the "Select block" checkbox used to be, that can be used as a handle for dragging and dropping a block

        