---json
{
  "title": "SJRK-53",
  "summary": "Work out storage model for block-based stories",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-03-02T15:00:07.350-0500",
  "updated": "2018-03-27T16:50:53.815-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-54/",
      "key": "SJRK-54"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-20/",
      "key": "SJRK-20",
      "summary": "Discuss authorship management"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-55/",
      "key": "SJRK-55",
      "summary": "Create block-style stories from pre-supplied models"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-56/",
      "key": "SJRK-56",
      "summary": "Persist block-style stories"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-03-27T16:50:53.813-0400",
      "body": "This has been achieved. Stories have a \"content\" key which contains the model data of each block from the editor, and this is then used by the viewer to reconstruct the block UI's\n"
    }
  ]
}
---
Determine an appropriate composite model for stories which are created in the block editor.

This can be developed and tested entirely client side.

        