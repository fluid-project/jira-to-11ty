---json
{
  "title": "SJRK-286",
  "summary": "Some images being uploaded with incorrect orientation",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-09-12T19:38:29.076-0400",
  "updated": "2020-03-15T21:44:33.098-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "MacOS (version?)\\\nboth in Safari and Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-286/2019-10-09 SJRK-286 Android 10 Chrome 77 working.png",
      "filename": "2019-10-09 SJRK-286 Android 10 Chrome 77 working.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-286/2019-10-09 SJRK-286 Windows 10 Chrome 77 not working.PNG",
      "filename": "2019-10-09 SJRK-286 Windows 10 Chrome 77 not working.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-13T07:49:39.671-0400",
      "body": "This may actually be an issue with the browser and not the exif on the uploaded image. We'd need to verify what is stored on the server, but from what I understand is that many browsers do not use the orientation information from the exif data. Firefox currently supports the[image-orientation CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation), which you can set to `from-image`. I actually added this to the upload preview but forgot to check it for the story viewer. <https://github.com/fluid-project/sjrk-story-telling/blob/stories-floe-dev/themes/base/css/storyTelling.css#L279>\n\nHere is some more information from stack overflow: <https://stackoverflow.com/a/42428659>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-09T14:47:51.113-0400",
      "body": "Cindy found this on SO, also relevant: <https://stackoverflow.com/questions/27049724/amazon-s3-flipping-portrait-image-in-browser>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-09T14:49:07.029-0400",
      "body": "Cindy also found this: <https://github.com/GoogleChromeLabs/squoosh/issues/299>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-11T17:13:51.061-0400",
      "body": "This may be promising, could potentially add this as Kettle middleware called on image save: <https://www.npmjs.com/package/jpeg-autorotate>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-15T15:31:24.157-0400",
      "body": "the `image-orientation` property is now deprecated and should not be depended upon to solve this issue. It would seem that the rotate-upon-saving approach is the best for the time being. I have begun implementing jpeg-autorotate to this end.\n\n<https://www.w3.org/TR/css-images-3/#propdef-image-orientation>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-11-20T10:50:23.473-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/50) has been merged into the project repo \"stories-floe-dev\" branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/c131d003a685a7bc29fdd9a8f787351d4ec9bd49).\n"
    }
  ]
}
---
Some images are being uploaded with incorrect orientation, even though such metadata likely exists in the image file.

**To reproduce**:

* find a JPEG image with EXIF data containing an orientation value other than 1
* if you're running from the pull request branch (<https://github.com/fluid-project/sjrk-story-telling/pull/50>), you can refer to the test images in the "tests\testData" directory
* add a new image block and upload that image

**Expected**: the image will be the correct orientation that matches what is seen in the Finder upload dialog or on the mobile device (see attached screenshot "working")

**Actual**: the image is rotated 90 or 180 degrees and looks incorrect (see attached screenshot "not working")

The image will have the incorrect orientation both in the story editor preview as well as in the published story

        