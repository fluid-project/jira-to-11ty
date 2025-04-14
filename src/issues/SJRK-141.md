---json
{
  "title": "SJRK-141",
  "summary": "Combine imageBlockEditor templates",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-06-05T16:37:44.749-0400",
  "updated": "2018-06-05T17:16:39.500-0400",
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
There are currently two different templates for the imageBlockEditor:

* storyBlockImage-noCamera.handlebars
* storyBlockImage-withCameraCapture.handlebars

These are chosen depending on whether the hasMobileCamera grade is merged into the imageBlockEditor grade or not (using the fluid.contextAware detection function).

Consolidate the two templates into one and make the required adjustments detect a flag that can be passed in at render time in order to decide whether to show one or both upload elements. The overriding of the template will at this point be unnecessary.

        