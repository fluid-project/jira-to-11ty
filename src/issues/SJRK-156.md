---json
{
  "title": "SJRK-156",
  "summary": "Expand tests for imageBlockEditor",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-14T15:12:18.299-0400",
  "updated": "2019-09-12T19:14:27.214-0400",
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
The test coverage for sjrk.storyTelling.blockUi.editor.imageBlockEditor is incomplete. Add a few more tests:

* ~~check the grade names to ensure the fluid.contextAware merging is happening as expected~~ (no longer applicable)
* call the updateImagePreview invoker manually and check the resulting values
* on imageUploadRequested, check that singleFileUploader's onUploadRequested also fires
* ~~on imageCaptureRequested, check that cameraCaptureUploader's onUploadRequested also fires~~ (no longer applicable)
* check that updateImagePreview is called with the correct arguments when singleFileUploader's fileObjectURL changes
* ~~check that updateImagePreview is called with the correct arguments when cameraCaptureUploader's fileObjectURL changes~~ (no longer applicable)

Also consider these possible additions:

* check the template has been rendered as expected
* check the bindings

        