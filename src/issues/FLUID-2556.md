---json
{
  "title": "FLUID-2556",
  "summary": "error message is not clear  for file deleted after adding to file cue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Laurel Williams",
  "date": "2009-04-07T12:45:17.000-0400",
  "updated": "2009-06-02T11:00:06.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win XP IE7 but probably all environments\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-671/",
      "key": "FLUID-671",
      "summary": "File Upload: Punch through more elaborate server-side upload errors"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<http://wiki.fluidproject.org/display/fluid/Uploader+QA+Test+Plan>

Test 3: Delete a File From the File System, While It Is In the File Queue

Error message says: File upload error: a network error occured

I would think the error message should say something like file not found...but I understand it may be impossible to differentiate between file not found and network interruption.

        