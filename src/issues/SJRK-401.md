---json
{
  "title": "SJRK-401",
  "summary": "Decouple call to resetUploadState function",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-20T21:10:21.245-0400",
  "updated": "2020-10-21T08:50:05.353-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-21T08:50:05.353-0400",
      "body": "It would be preferable to not call managedComponent.singleFileUploader.resetUploadState() directly as noted in the description. A better option would be to have resetUploadState functionality triggered by the onDestroy method of the related component. However there is currently an issue in the framework that prevents this (see: <https://fluidproject.atlassian.net/browse/FLUID-6558#icft=FLUID-6558>). This has also been further discussed in comments of <https://fluidproject.atlassian.net/browse/SJRK-400#icft=SJRK-400>\n"
    }
  ]
}
---
The call to singleFileUploader.resetUploadState() by the storyEditor on block removal is too tightly coupled with the singleFileUploader grade. Reconfigure this section of the code to be less "aware" of the way the uploader tracks its state.

```javascript
// If it's a media block, reset its uploadState before removing
if (managedComponent.singleFileUploader) {
    managedComponent.singleFileUploader.resetUploadState();
}
```

        