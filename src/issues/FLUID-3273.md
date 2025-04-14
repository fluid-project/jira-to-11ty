---json
{
  "title": "FLUID-3273",
  "summary": "[Uploader] Error message: cannot upload (Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Tona Monjo",
  "date": "2009-10-09T08:25:34.000-0400",
  "updated": "2011-01-05T15:56:39.931-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Flash 10 - Safari 4 - Mac OSX 10.5\\\nFlash 10 - FF3 - Mac OSX 10.5\\\nFlash 10 - FF3.5 - Mac OSX 10.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:56:39.929-0500",
      "body": "Image gallery issue, not an uploader issue.   Appropriate error messages will be implemented for better user feedback.   As a note, only IE will be using the SWF uploader.   All other browsers will be using the new HTML5 implementation.\n"
    }
  ]
}
---
Test 6: Upload Files

Server\
After browsing several files, sometimes upload begins but finally appears an error message for each file: \
File upload error: a network error occured or the file was rejected (reason unknown).\
Uploaded: 0 of 2 files (0.0 KB), 2 errors

Some other times, performs the upload correctly (with the same files).&#x20;

I've tested the same task with the same files at the Demo an it works correctly.&#x20;

        