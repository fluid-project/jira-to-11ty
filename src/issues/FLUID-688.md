---json
{
  "title": "FLUID-688",
  "summary": "File Uploader: no error message when uploading a file that is in the upload queue but has been deleted from the file system",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-06-02T16:07:36.000-0400",
  "updated": "2008-07-28T14:35:04.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Mac OS 10.5, WinXP)\\\nIE7 (WinXP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-25T22:50:50.000-0400",
      "body": "Added an error message for the case where the file was moved or deleted after the file was queued but before the file is uploaded.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-07T20:45:42.000-0400",
      "body": "Tried on FF2 (Mac 0S X)&#x20;\n\nIt didn't trigger the error message. Is this because no files are actually being uploaded on the build site?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-16T22:18:06.000-0400",
      "body": "this is a case that can only be tested against an a real back-end.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-22T23:31:59.000-0400",
      "body": "I'm going to declare this Fixed until such a time as it can be tested against the Uploader running in the \"live\" mode off a real server\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T14:35:04.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
A selection of files is added to the upload queue. Before the uploads are completed, a file which has yet to be uploaded is deleted from the file system. Currently the Uploader completes as though the file was still there.&#x20;

An error message, indicating that the file could not be found, should probably be displayed. Another possible alternative would be to have the Uploader lock the files, so that they could not be deleted/moved until after the uploads are complete.

        