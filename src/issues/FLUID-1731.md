---json
{
  "title": "FLUID-1731",
  "summary": "Uploader 2: An ActionScript error occurs when uploading files, using IE7",
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
  "date": "2008-10-29T14:20:29.000-0400",
  "updated": "2008-12-18T14:05:25.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE7 (win vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-29T15:56:52.000-0400",
      "body": "Only seems to occur when the file has already been uploaded before\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T14:05:25.000-0500",
      "body": "Appears to have been fixed\n\nTested using:\n\nIE7 (Win Vista)\n"
    }
  ]
}
---
An ActionScript error occurs when uploading files, using Vista

Steps to reproduce:

1\) add files to the file

2\) upload the files

Notice that an ActionScript error message pops up:

"Error #2044: Unhandled IOErrorEvent:. text=Error #2038: File I/O Error.

You can dismiss this and the file will upload

        