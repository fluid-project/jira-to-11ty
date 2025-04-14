---json
{
  "title": "SJRK-69",
  "summary": "Implement interface language selection",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-04-04T14:14:06.629-0400",
  "updated": "2018-05-01T10:33:29.189-0400",
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
      "date": "2018-04-17T17:17:28.760-0400",
      "body": "The story is now updated from existing blocks every time the \"context\" is changed. I.e. every time the visibility of a \"page\" is changed, or the story is submitted. <https://github.com/BlueSlug/sjrk-story-telling/commit/71949b06ee040b0ed004ac0f281b10542c30ec0e>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-04-18T13:30:37.124-0400",
      "body": "An image block's preview image is now updated when the block is re-rendered in the editor. <https://github.com/BlueSlug/sjrk-story-telling/commit/ac13edea2e5f23e7845bdceb6c54883447311300>\n\n \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-04-18T13:35:47.402-0400",
      "body": "I have added <https://fluidproject.atlassian.net/browse/SJRK-81#icft=SJRK-81> to capture the last of our three sub-tasks\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-04-18T13:36:13.909-0400",
      "body": "Language switching in the block editor has been implemented\n"
    }
  ]
}
---
Implement the ability to select the user interface language. There is currently a value in uiManager to set the localization:

{uiManager}

.uiConfig.uiLanguage: "en" (default is English, we may wish to change this)

**OUTSTANDING ISSUES TO BE RESOLVED:**

* -Switching languages with an image block causes the image to be lost in the editor - probably an issue with the logic of the uploader behaviour and its generation of blob URLs- Solved!
* -Currently, blocks are persisted to the story model only when clicking "Continue" to move on to the next screen of the editor. This means they can be lost if someone switches languages - we should persist blocks to the story model any time we rerender or similar.- Solved!
* Switching languages on the Preview screen and then clicking "Back" returns you to the first page of the editor, not the second

        