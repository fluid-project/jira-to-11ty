---json
{
  "title": "SJRK-325",
  "summary": "Reconsider selector names",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-02-14T14:20:58.463-0500",
  "updated": "2020-02-14T14:20:58.463-0500",
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
Many of the selector names for viewComponents within the application begin with "story". This is repetitive and makes it take longer to parse the names at a glance.

Likewise, the CSS classes associated with these selectors could also potentially be simplified while still remaining unique enough to avoid collisions.

e.g.

```javascript
selectors: {
 storySubmit: ".sjrkc-st-story-submit",
 storyEditorForm: ".sjrkc-st-story-editor-form",
 storyEditorContent: ".sjrkc-st-story-editor-content",
 storyEditorNext: ".sjrkc-st-story-editor-next",
 storyEditorPrevious: ".sjrkc-st-story-editor-previous",
 storyEditStoryStep: ".sjrkc-st-story-editor-edit-story-step",
 storyMetadataStep: ".sjrkc-st-story-editor-metadata-step",
 storyAddAudioBlock: ".sjrkc-st-button-audio-block",
 storyAddImageBlock: ".sjrkc-st-button-image-block",
 storyAddTextBlock: ".sjrkc-st-button-text-block",
 storyAddVideoBlock: ".sjrkc-st-button-video-block",
 storyRemoveSelectedBlocks: ".sjrkc-st-button-remove-blocks"
}
```

could become

```javascript
selectors: {
 submit: ".sjrkc-st-submit",
 editorForm: ".sjrkc-st-editor-form",
 editorContent: ".sjrkc-st-editor-content",
 editorNext: ".sjrkc-st-editor-next",
 editorPrevious: ".sjrkc-st-editor-previous",
 editStoryStep: ".sjrkc-st-editor-edit-story-step",
 metadataStep: ".sjrkc-st-editor-metadata-step",
 addAudioBlock: ".sjrkc-st-add-audio-block",
 addImageBlock: ".sjrkc-st-add-image-block",
 addTextBlock: ".sjrkc-st-add-text-block",
 addVideoBlock: ".sjrkc-st-add-video-block",
 removeBlocks: ".sjrkc-st-remove-blocks"
}
```

        