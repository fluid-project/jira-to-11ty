---json
{
  "title": "FLUID-1727",
  "summary": "Uploader 2: Uploads file removed from the file queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-10-29T11:20:33.000-0400",
  "updated": "2008-10-29T15:47:55.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1726/",
      "key": "FLUID-1726",
      "summary": "Uploader 2: Only the first file is being uploaded."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-29T11:23:12.000-0400",
      "body": "It appears that in both <https://fluidproject.atlassian.net/browse/FLUID-1726#icft=FLUID-1726> and this one (<https://fluidproject.atlassian.net/browse/FLUID-1727#icft=FLUID-1727>) the file with File ID: SWFUpload\\_0\\_0 is the only one uploaded. In the case where a file is added and removed it is still linked with this file id after it has been removed from the file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-29T15:47:55.000-0400",
      "body": "appears to be fixed with r5896\n"
    }
  ]
}
---
Uploads file removed from the file queue.

Steps to reproduce:

1\) Add a file to the uploader

2\) Click the x beside the file name to remove it from the file queue

3\) Add a different file to the uploader

4\) Click upload

Notice that after the upload has completed, the file that was removed has been uploaded

        