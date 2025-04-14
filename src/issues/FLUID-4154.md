---json
{
  "title": "FLUID-4154",
  "summary": "HTML5 Uploader breaking while uploading remotely to a server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-03-18T14:37:10.208-0400",
  "updated": "2011-03-22T14:24:43.153-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
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
      "date": "2011-03-22T14:24:43.151-0400",
      "body": "Reviewed and pushed into trunk\n"
    }
  ]
}
---
The HTML5 strategy needs an argumentMap in the remote implementation to distinguish which argument contained the options for options merging as per the new framework.   See FLUID-4055 for more details.   As a result of this, the uploader fails to remotely send files to a server.

        