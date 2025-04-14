---json
{
  "title": "FLUID-1724",
  "summary": "Uploader 2: Ensure that currentBatch.bytesUploaded is updated each time a file progress updates.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-28T21:42:45.000-0400",
  "updated": "2010-12-22T15:40:10.389-0500",
  "versions": [
    "1.2"
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
      "author": "Colin Clark",
      "date": "2008-10-28T21:46:35.000-0400",
      "body": "I have implemented by adding an onFileProgress listener within SWFUploadManager, which then updates the state of the fileQueue accordingly. In time, it will likely be best to shift this logic into the fileQueue itself. I also pass the currentFile.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-28T21:46:52.000-0400",
      "body": "This code still needs unit tests before it is complete.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-29T14:42:44.000-0400",
      "body": "Still needs unit tests.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:25:39.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T15:40:10.386-0500",
      "body": "This issue was resolved in an old version of Infusion but was left open due to unit tests. I'll file a separate unit testing issue instead.\n"
    }
  ]
}
---
At the moment, the currentBatch's state is not dynamically updated as an upload progresses.

        