---json
{
  "title": "FLUID-1713",
  "summary": "Add a new afterUploadComplete event, which should be fired when the whole batch of files is finished uploading.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-27T19:04:08.000-0400",
  "updated": "2011-02-22T16:27:50.856-0500",
  "versions": [],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-28T16:16:01.000-0400",
      "body": "afterUploadComplete has been added to the SWFUploadManager. The full list of available events are now:\n\nevents: {\\\nafterReady: called after the uploader is ready for action,\\\nonFileDialog: called when the OS file dialog is opened,\\\nafterFileQueued: called after a file has been added the queue,\\\nafterFileRemoved: when a file is removed from the queue,\\\nonQueueError: when an occur occurs while trying to add a file to the queue,\\\nafterFileDialog: after the OS file dialog is dismissed,\\\nonUploadStart: when an upload batch is started,\\\nonFileStart: when a new file starts to be uploaded,\\\nonFileProgress: called periodically as the upload progresses,\\\nonFileError: called if an error occurs during the file upload process,\\\nonFileSuccess: when a file is successfully uploaded,\\\nafterFileComplete: when a file has completed, either successfully or in error,\\\nafterUploadComplete: when a batch of files is finished being uploaded\\\n},\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:50.849-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
We need an event that will signal the user when the whole batch of files is finished being uploaded. afterUploadComplete is a good name, however it's already being used mistakenly when a file is complete. Here's a proposal for reworking the events in Uploader 2:

onFileSuccess: when a file has been successfully uploaded\
onFileComplete: when a file is fully completely uploaded\
onUploadComplete: when the whole batch of files is complete

        