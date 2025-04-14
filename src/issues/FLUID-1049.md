---json
{
  "title": "FLUID-1049",
  "summary": "Duplicate file error message (error code: 500) appears too late",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-28T15:22:33.000-0400",
  "updated": "2008-09-30T11:15:51.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Safari 3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-08-05T20:08:12.000-0400",
      "body": "There is **no way** to know that a file is a duplicate until the file is sent to the server. The server actually compares the binaries of the files, it doesn't care about file names since the files may have come from different directories or been changed on the local machine between uploads.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-08-05T20:08:28.000-0400",
      "body": "See previous note\n"
    },
    {
      "author": "Erin Yu",
      "date": "2008-08-06T12:20:18.000-0400",
      "body": "I think the experience of waiting for the file to upload completely to find out if that the same file already exists is less than desirable.&#x20;\n\nIs it possible to check for the file names in the queue when user clicks Upload, against the file names in the destination folder on the server, and display a warning message if there is a duplicate. The message would read, for example, \"There is already a file named \"filename.doc\". Replace it? \\[Replace]  \\[Remove from queue]\" and the user can make the decision to overwrite the file or cancel that file.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:15:51.000-0400",
      "body": "closed for now, may reopen later if a proper strategy can be devised\n"
    }
  ]
}
---
If a file has already been uploaded to the server, an error message is displayed. However, this error message doesn't occur until after the duplicate file has been uploaded. If it is a large file and/or the connection is slow, the user could be stuck waiting a long time before the error is displayed.

Steps to reproduce:

1\) Open a live version of the Uploader

2\) Upload a large file (e.g. 20 mb)

3\) Upload the same file a second time. Notice that you have to wait for the upload to complete before the error is thrown.

        