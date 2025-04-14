---json
{
  "title": "FLUID-607",
  "summary": "Uploading a large file fails, no feedback given.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T15:35:59.000-0400",
  "updated": "2009-01-14T13:39:11.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 OSX10.5 Flash 9\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1811/",
      "key": "FLUID-1811"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-06-02T13:39:56.000-0400",
      "body": "I was unable to upload any single file larger than 21MB. The OS file open dialog would allow me to select the file, but the Uploader would not add it to the list. I could add multiple 20MB files to the Uploader, though.&#x20;\n\nAttempted with:\n\nFF2 (Mac OS 10.5, WinXP)\\\nIE7 (WinXP)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:43:44.000-0400",
      "body": "Affects Uploader 2\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2009-01-13T12:20:45.000-0500",
      "body": "Both server and demo versions - failure, no message. Server debug:\n\nSWF DEBUG: Event: fileDialogStart : Browsing files. Multi Select. Allowed file types: **.gif;**.jpeg;**.jpg;**.png;\\*.tiff\\\nSWF DEBUG: Event: fileDialogComplete: File Dialog window cancelled.\\\nSWF DEBUG: Event: fileDialogStart : Browsing files. Multi Select. Allowed file types: **.gif;**.jpeg;**.jpg;**.png;\\*.tiff\\\nSWF DEBUG: Select Handler: Received the files selected from the dialog. Processing the file list...\\\nSWF DEBUG: Event: fileQueueError : File exceeds size limit.\\\nSWF DEBUG: Event: fileDialogComplete : Finished processing selected files. Files selected: 1. Files Queued: 0\n"
    }
  ]
}
---
Uploading a large file (60MB) fails and no feedback is given.\
Incidentally, there is no indication what the max filesize is.

        