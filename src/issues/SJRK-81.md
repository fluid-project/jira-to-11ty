---json
{
  "title": "SJRK-81",
  "summary": "Block editor resets visibility upon language change",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-04-18T13:35:28.218-0400",
  "updated": "2018-07-17T12:26:03.713-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When the language is changed, the block editor will revert to page 1 (the block editing context) regardless of whether page 2 (the title, author, keywords) was being displayed. This can be reproduced by clicking ahead to the second page of the editor and changing the language, or by advancing to the story preview, changing the language and clicking "back".

This is because the template for the editor is being re-rendered, but the visibility of each "page" on it is not being preserved.

        