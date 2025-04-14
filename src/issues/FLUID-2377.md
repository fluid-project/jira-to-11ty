---json
{
  "title": "FLUID-2377",
  "summary": "[Uploader] afterUploadComplete event is not granular enough",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Eli Cochran",
  "date": "2009-03-17T19:10:56.000-0400",
  "updated": "2017-01-16T09:44:11.051-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now when the upload cycle is complete there is only one event that gets fired that isn't file specific: afterUploadComplete

This is the only event that an integrator or developer can use to fire off an action at the very end of the upload cycle. But this event fires happens when the cycle ends whether it ended because the user clicked stop, some but not all files uploaded, all files uploaded, all files errored.&#x20;

It is most likely that an implementor or developer would want to do something different depending on how the upload cycle completed. We could probably get away with two events, "every file was uploaded successfully" and "upload stopped but some files errored or are still in the queue"

For 1.0 we need to document the workaround for this, using a listener which checks the state of the queue before doing an action, as in this example from the Image Gallery server demo:

afterUploadComplete: function () {\
if (myUpload.uploadManager.queue.getReadyFiles().length === 0) { // we're really really done\
window.location.href = "/sakai-imagegallery2-web/site/BrowseImages/";\
}\
}

        