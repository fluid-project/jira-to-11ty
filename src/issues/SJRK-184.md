---json
{
  "title": "SJRK-184",
  "summary": "Captured images are duplicated on iOS",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2019-01-17T23:07:48.444-0500",
  "updated": "2020-12-13T21:01:33.263-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-01-22T15:27:54.752-0500",
      "body": "I read up about possible causes of iOS capture behaviour, but couldn't pinpoint a particular cause. I tried to remotely debug the website on the iPad, but this yielded no results, I suspect the issue may be within Safari itself and its handling of multiple captured images.\n\nI found some posts online suggesting that a file-type input in iOS with capture=\"camera\" will not allow the \"multiple\" attribute and capturing from the camera at the same time. Given this attribute, iOS will only offer the option to upload multiple photos from the file system and not to capture any from the camera. Though this is different from our situation — uploading multiple single captured images — perhaps the cause is the same and iOS's restriction on multiple uploads from one file input is a workaround for that particular case.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-23T15:38:18.745-0500",
      "body": "I have a theory that would explain this behaviour.\n\nWhen we publish a story, the server request handler processes through each content block. And for blocks with associated files, including images, we match the block to the associated uploaded file and rename the file in the block, to the name that it will be served with by the server.\n\nThe matching is done by filename – just the filename, without any path information – such as `image.jpeg`.\n\n<https://github.com/fluid-project/sjrk-story-telling-server/blob/b22a0b39ae517abee8c184f73c7ad92218e60f48/src/js/requestHandlers.js#L142>\n\nNow, if we had multiple uploaded files with the same name (such as `capture.jpeg` say), we would experience the behaviour outlined in this JIRA – all the blocks would be matched with the first file with the appropriate name.\n\nI've been able to reproduce this issue by uploading 2 images with the same name from different directories.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-29T17:00:54.258-0500",
      "body": "This issue also seems to be happening on the iPad 2 with iOS 9.3.5 with respect to audio and video content that has been captured. This seems to have been solved by iOS 12.1.1, though, as the iPad Mini 2 and iPad Air 2 are able to have multiple captured audio or video blocks.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-12-13T21:01:33.248-0500",
      "body": "The switch to a server-side file management setup has solved this issue\n"
    }
  ]
}
---
When attempting to publish a story from certain iOS devices, if there is more than one image block and the images are captured, all subsequent captured image blocks will have their image replaced by the first one. This has been tested with two and four images, and has been reliably reproduced on that device several times. The image blocks all have the URL of the first saved file, so it seems they aren't being treated as separately-uploaded image files.

This is not an issue when the images are all from the photo library and already saved on the device, it only manifests itself when the images are captured from the camera directly into the image block.

***

This works properly and as expected on:

* Pixel 3 (Android 9), Chrome 71
* Nexus 7 (2012), Chrome 71
* emulated Nexus 5X (Android 8.1), Chrome 61

This issue has been confirmed and reproduced on:

* iPad Mini 2 running iOS 12.1.1
* iPad Air 2 running iOS 12.1.1
* iPad 2 running iOS 9.3.5

***

**To reproduce:**

* Begin a new story
* Add an image block
* Capture an image (not upload from Photo Library)
* Add another image block
* Capture a different image
* Click "Continue"
* Click "Preview My Story"
* Click "Publish My Story"

**Expect:**

* Both images on the resulting published story to be different

**Actual:**

* Both images on the resulting published story are identical, and have the same file URL

        