---json
{
  "title": "FLUID-1947",
  "summary": "Uploader indicate that 1 too many files where uploaded if the Upload is cancelled in the middle of an upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-12-08T20:20:22.000-0500",
  "updated": "2009-01-20T13:38:53.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1947/FLUID-1947.b.patch",
      "filename": "FLUID-1947.b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1947/FLUID-1947.d.patch",
      "filename": "FLUID-1947.d.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-09T15:28:44.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-11T15:21:41.000-0500",
      "body": "The patch attached to <https://fluidproject.atlassian.net/browse/FLUID-1948#icft=FLUID-1948>, which purports to address both issues, doesn't seem to deal with this one properly. I can still recreate the situation that the display of the number of uploaded files is incorrect.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-12T20:36:24.000-0500",
      "body": "It took me a long time to get my head around <https://fluidproject.atlassian.net/browse/FLUID-1947#icft=FLUID-1947> but finally I figured out that what was happening was because we insert a delay between each file progress event. We do this to simulate what would happen during and actual upload, and give the user a chance to respond to the behavior of the component in a simulated upload.\n\nWhat was happening was that between the moment that we queued up the next progress and the time that the progress actually happened, the user could click the Stop Upload button thus firing a bunch of other events. Depending on the timing of the click, different odd things would happen.\n\nSo instead of doing:\n\ncheck if we can progress\\\nset next progress on the timer\\\ntimer fires next progress\\\nnext progress\n\nWe need to\n\ncheck if we can progress\\\nset next progress on the timer\\\ntimer fires next progress\\\ncheck if we can progress\\\nnext progress\n\nI also removed the delay on finishUploading because this was another place where the user could slip an event in, and it wasn't really necessary for the simulation.  At the point that the finishUpload fires, we should not wait but start in immediately into the next file.\n\nAnd I switched the code to use that.queue.isUploading instead of that.demoState.shouldPause which meant that pauseDemo could be simplified a little bit and we're using a consistent variable to checking the state of the upload.\n\nObviously this needs a very detailed review.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-13T12:24:13.000-0500",
      "body": "This patch is a slight modification of Eli's <https://fluidproject.atlassian.net/browse/FLUID-1947#icft=FLUID-1947>.b.patch file. Here are the noteworthy changes:\n\n1\\. I renamed pauseDemo to stopDemo to be consistent with the our naming conventions throughout the component.\\\n2\\. I put back the call to afterFileComplete (aka. \"that.swfUploadSettings.upload\\_complete\\_handler\") in stopDemo. I think the omission of this call will leave the queue without cleaning up, and is inconsistent with the behaviour of the server-backed version. Double-check me on this one.\\\n3\\. I removed a needless layer of nested if statements in simulateUpload() by first checking if we're not uploading and bailing immediately.\\\n4\\. I similarly removed a layer of indenting in finishUploading() using the same strategy.\n\nThis patch could use a good review, preferably from Eli since he knows the issue best.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T12:36:46.000-0500",
      "body": "Colin Clark's patch has been committed.&#x20;\n\nI believe that this successfully finishes off this ugly little timing bug.&#x20;\n\nA couple notes:\n\n* I suspect that repeatedly clicking on the Stop Upload/Upload buttons with out a reasonable pause will still mess up the UI and possibly throw an error. \\\n  &#x20; This is a fix for the more reasonable case of someone clicking with good intention.&#x20;\n\n- There is a minor little problem that can wait until after 0.6. At the moment when the file errors, there is a call which hides the total progressor and updates the Total status text. Unfortunately it does a quick animation to 100% before it hides it even if the upload was cancelled. This will be written up as another bug.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-20T13:38:53.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
Uploader indicate that 1 too many files where uploaded if the Upload is cancelled in the middle of an upload

Because we increment the batch.numFilesCompleted in SWFUploadManager.js (line 74) even if the Upload was stopped or the file errored, we could present the user with the wrong number of uploaded files in the UI.&#x20;

Need to create a batch.numUploadErrors where we keep track of errors and then calculate the number in the UI using (batch.numFilesCompleted - batch.numUploadErrors). This new param will allow us to display a new "X files were not correctly uploaded message..."&#x20;

        