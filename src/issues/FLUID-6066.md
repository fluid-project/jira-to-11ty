---json
{
  "title": "FLUID-6066",
  "summary": "Summary of uploader state updates too aggressively when uploading large files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2016-11-14T15:18:43.185-0500",
  "updated": "2016-11-14T15:18:43.185-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Browser: Chrome 54 | OS: Mac OS 10.12.1 | Screen Reader: VoiceOver\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When testing with VoiceOver in Chrome, I noticed that there is an unpleasant stutter effect when uploading a large file. It seems this is because of the continual reporting of the uploader state from this block of markup (example):

\<div class="flc-uploader-total-progress-text fl-uploader-total-progress-text" id="fluid-id-bmrsp4er-122" role="log" aria-live="assertive" aria-relevant="text" aria-atomic="true">5 out of 7 files uploaded (2.3 MB of 28.3 MB)\</div>

VoiceOver report the state as the uploader's size count changes, but only gets to the very start of the sentence before the size count changes again, resulting in a re-report due to the aria-alive "assertive" setting that interrupts the reading . This creates a stuttering effect when a large file is being uploaded.

Easiest to replicate by uploading several files including at least one large file when VoiceOver is enabled in Chrome.

        