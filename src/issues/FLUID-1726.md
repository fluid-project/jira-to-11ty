---json
{
  "title": "FLUID-1726",
  "summary": "Uploader 2: Only the first file is being uploaded.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-10-29T11:01:55.000-0400",
  "updated": "2008-10-29T14:28:02.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1727/",
      "key": "FLUID-1727"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-29T14:28:02.000-0400",
      "body": "fixed with r5890\n"
    }
  ]
}
---
The upload stops after the first file upload is completed.

Here is the debug information produced:

SWF DEBUG: \
SWF DEBUG: Event: fileDialogStart : Browsing files. Multi Select. Allowed file types: **.gif;**.jpeg;**.jpg;**.png;\*.tiff\
SWF DEBUG: Select Handler: Received the files selected from the dialog. Processing the file list...\
SWF DEBUG: Event: fileQueued : File ID: SWFUpload\_0\_0\
SWF DEBUG: Event: fileQueued : File ID: SWFUpload\_0\_1\
SWF DEBUG: Event: fileQueued : File ID: SWFUpload\_0\_2\
SWF DEBUG: Event: fileDialogComplete : Finished processing selected files. Files selected: 3. Files Queued: 3\
SWF DEBUG: StartUpload: First file in queue\
SWF DEBUG: Event: uploadStart : File ID: SWFUpload\_0\_0\
SWF DEBUG: ReturnUploadStart(): File accepted by startUpload event and readied for upload.  Starting upload to ../../site/multiFileUpload for File ID: SWFUpload\_0\_0\
SWF DEBUG: Event: uploadProgress (OPEN): File ID: SWFUpload\_0\_0\
SWF DEBUG: Event: uploadProgress: File ID: SWFUpload\_0\_0. Bytes: 131072. Total: 200978\
SWF DEBUG: Event: uploadProgress: File ID: SWFUpload\_0\_0. Bytes: 172032. Total: 200978\
SWF DEBUG: Event: uploadProgress: File ID: SWFUpload\_0\_0. Bytes: 200978. Total: 200978\
SWF DEBUG: Event: uploadSuccess: File ID: SWFUpload\_0\_0 Data: 4\
SWF DEBUG: Event: uploadComplete : Upload cycle complete.

        