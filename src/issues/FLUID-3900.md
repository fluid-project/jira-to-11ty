---json
{
  "title": "FLUID-3900",
  "summary": "Uploader stops only after the current file has been completely uploaded.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2010-12-14T10:26:06.696-0500",
  "updated": "2011-02-22T11:45:48.381-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-02-22T11:44:58.155-0500",
      "body": "Two strategies were implemented to stop uploading:  \\\n1\\)  Flash strategy stops uploading once the current file has been processed\\\n2\\)  All other strategies immediately stop uploading. &#x20;\n\nA comment from Colin Clark's commit:  \\\n\"Flash waits for the current file to completely in order to avoid a bug in either SWFUpload or (possibly) our Image Gallery demo where the upload process hangs on a previously-stopped file.\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-02-22T11:45:48.369-0500",
      "body": "The fix has been committed to the master repository.\n"
    }
  ]
}
---
The uploader stops only after the current file has been completely uploaded.   We'll want to fix the code so that the stop button takes immediate effect. &#x20;

        