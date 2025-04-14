---json
{
  "title": "SJRK-192",
  "summary": "Update block editor input fields for all types",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-22T13:11:06.261-0500",
  "updated": "2019-01-25T13:48:55.213-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-192/StorytellingTool_UpdatedUI_V6_SS_Page_2.jpg",
      "filename": "StorytellingTool_UpdatedUI_V6_SS_Page_2.jpg"
    }
  ],
  "comments": []
}
---
Several updates must be made to the text input fields on all block types:

1. Headings should now read "Add section title"
2. Headings are to appear after the main content in the editor (see screenshot)
3. Text block simplified text field to read "Add summary"
4. Image, Audio and Video block caption field to read "Add caption"
5. Image block description field to read "Add image description"
6. Remove the "translate" field from Audio and Video blocks non-destructively (comment out or hide the field)
7. Audio and Video block transcript field to read "Create text option"

        