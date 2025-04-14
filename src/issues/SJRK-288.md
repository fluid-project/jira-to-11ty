---json
{
  "title": "SJRK-288",
  "summary": "Add block reordering functionality",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-09-12T19:44:01.488-0400",
  "updated": "2020-07-14T01:42:32.986-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-359/",
      "key": "SJRK-359"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-358/",
      "key": "SJRK-358",
      "summary": "Add ability to \"Clear all\" story blocks at once"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/image-2020-05-26-18-10-31-883.png",
      "filename": "image-2020-05-26-18-10-31-883.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/image-2020-06-10-11-20-45-533.png",
      "filename": "image-2020-06-10-11-20-45-533.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/StorytellingTool_drag drop handle-11.png",
      "filename": "StorytellingTool_drag drop handle-11.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/StorytellingTool_Reorder_DA.png",
      "filename": "StorytellingTool_Reorder_DA.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/StorytellingTool_UpdatedUI_V12_DA-20.svg",
      "filename": "StorytellingTool_UpdatedUI_V12_DA-20.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/StorytellingTool move block down.svg",
      "filename": "StorytellingTool move block down.svg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-288/StorytellingTool move block up.svg",
      "filename": "StorytellingTool move block up.svg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-13T07:52:14.477-0400",
      "body": "Might want to also take a look at the Infusion Reorderer. <https://build.fluidproject.org/infusion/demos/reorderer/listReorderer/>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-11-12T16:09:20.490-0500",
      "body": "Feedback: it might be good to provide a block deletion along with the order up/down buttons\n"
    },
    {
      "author": "Dana",
      "date": "2020-05-26T21:10:36.337-0400",
      "body": "Mockups without individual block deletion button:\n\n<https://files.inclusivedesign.ca/index.php/f/112362>\n\n \n\n \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-05-27T14:03:59.104-0400",
      "body": "The single block deletion button work will be tackled separately in <https://fluidproject.atlassian.net/browse/SJRK-358#icft=SJRK-358>, and the drag-and-drop functionality will be tackled in <https://fluidproject.atlassian.net/browse/SJRK-359#icft=SJRK-359>. Both of these should be done only after this Jira has been completed.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-06-30T15:40:19.957-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/84) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/124ca75934d39db06645c1cd017a7966efa6da49).\n"
    }
  ]
}
---
Add the ability to reorder and/or move blocks. A simple implementation could be Gutenberg-style up and down buttons to switch a block's position with that of the one above or below it, respectively.

        