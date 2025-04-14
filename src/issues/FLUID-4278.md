---json
{
  "title": "FLUID-4278",
  "summary": "Uploader error messages should be more descriptive",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2011-06-02T15:30:40.165-0400",
  "updated": "2011-06-23T15:17:14.222-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-06-02T16:44:15.620-0400",
      "body": "Jon, see <https://fluidproject.atlassian.net/browse/FLUID-3878#icft=FLUID-3878>.   We have a branch with better, more appropriate error handling for the uploader.   It's being reviewed to be pushed into the repo.\n"
    }
  ]
}
---
The Uploader should produce error messages that are more useful. Currently it just gives "Error 403" messages and a filename.

Possible error cases (not exhaustive list):

* Filesize exceeded
* File not supported for uploading
* File queue exceeded
* Insufficient disk space
* Insufficient permissions

These error strings should be customizable of course.

        