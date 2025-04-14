---json
{
  "title": "SJRK-49",
  "summary": "Add basic block management behaviour",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-02-07T13:01:02.590-0500",
  "updated": "2018-07-17T15:09:50.923-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-50/",
      "key": "SJRK-50"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-49/IMG_20180207_171809.jpg",
      "filename": "IMG_20180207_171809.jpg"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-02-21T17:54:03.836-0500",
      "body": "\"Basic functionality\" is restricted to purely client-side changes to bring tool into alignment with new design:\n\n* Simplified content block management\n* No rearranging, just creation and deletion\n* No undo\n\n- Text block\n- Image block\n  * Upload\n  * Camera Capture\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-03-01T12:27:14.727-0500",
      "body": "This has been implemented in the Learning Reflections \"micro-site\"\n"
    }
  ]
}
---
Add basic block management behaviour to the storytelling tool. This is meant to cover only the initial, most basic functionality of the block system. More features are to be added in later.

* block addition
* block deletion
* text block
* image block
  * image uploading
  * image capturing

        