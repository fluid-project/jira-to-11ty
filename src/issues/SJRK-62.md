---json
{
  "title": "SJRK-62",
  "summary": "Refactor block grades",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-03-19T16:38:18.492-0400",
  "updated": "2018-05-25T15:33:55.310-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-62/IMG_20180319_154631.jpg",
      "filename": "IMG_20180319_154631.jpg"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-03-26T18:52:27.416-0400",
      "body": "PR opened to merge this into <https://fluidproject.atlassian.net/browse/SJRK-49#icft=SJRK-49>\n\n<https://github.com/BlueSlug/sjrk-story-telling/pull/4>\n"
    }
  ]
}
---
Refactor the block grades according to the setup which was discussed.

The new setup will be:

* {block} contains only the model data for all blocks
  * {block.text} will contain the model values specific to text blocks
  * {block.image} likewise for image blocks
* {blockUi} will have the templateManager subcomponent
  * {blockUi.textViewer} will handle displaying text blocks
    * it will have a {block.text} as a subcomponent, similar to how a {ui} has {story} as a subcomponent
  * {blockUi.imageViewer} will handle displaying image blocks
    * it will have a {block.image} as a subcomponent
  * {blockUi.editor} will have fields shared among all editors
    * it will have a {binder} subcomponent
  * {blockUi.editor.textEditor} will have specifics for editing text blocks
    * it will have a {block.text} subcomponent
  * {blockUi.editor.imageEditor} will have specifics for editing text blocks
    * it will have a {block.image} subcomponent

        