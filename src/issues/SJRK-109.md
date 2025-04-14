---json
{
  "title": "SJRK-109",
  "summary": "Clarify event names and behaviours for singleFileUploader",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T15:41:12.505-0400",
  "updated": "2018-05-31T15:41:12.505-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The singleFileUploader grade uses hidden upload form elements to allow custom upload behaviour. The main implementation of this currently is the imageBlockEditor, which has up to two of them, one for file image upload, another for camera upload (on mobile).

The similar event names of "imageUploadRequested" on the imageBlockEditor and "onUploadRequested" on singleFileUploader creates some confusion about what component is responsible for what. Capturing this here:

* "imageUploadRequested" simply captures the intent of the user clicking the "Upload Image" button.
* the singleFileUploader subcomponent of imageBlockEditor listens to the prior event to fire its own "onUploadRequested" event; this is listened to and then clicks the hidden file input to actually open the uploader dialogue.

This level of indirection may be excessive and confusing. We should consider whether it would be more appropriate to have an invoker on singleFileUploader called "doUpload" or similar that would continue to "hide" specific implementation details, but be callable by another component.

        