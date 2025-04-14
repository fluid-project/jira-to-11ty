---json
{
  "title": "SJRK-436",
  "summary": "Preview image missing on captured image upload on iPad",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-03T17:48:55.062-0500",
  "updated": "2020-12-03T17:48:55.062-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-436/a41aa8a4-8ebd-4f50-90a1-a0b567d3cdb9_70927e29-b690-4f06-8378-4b648044f688.png",
      "filename": "a41aa8a4-8ebd-4f50-90a1-a0b567d3cdb9_70927e29-b690-4f06-8378-4b648044f688.png"
    }
  ],
  "comments": []
}
---
Observed in Safari on an iPad Air 3 running iOS 13.3: upon the completion of an image upload (the first attempt for that block), the image block's preview changed to an empty box rather than to a preview of the uploaded image. Upon uploading a second image, everything worked as expected.

**To reproduce:**\
Not sure, requires further attempts

**Expected:**\
After uploading an image to an image block, the preview would be set to the uploaded image

**Actual:**\
The image block preview was a small empty square

        