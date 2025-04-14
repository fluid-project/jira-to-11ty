---json
{
  "title": "FLUID-1812",
  "summary": "[Uploader 2] When adding a file fails, the file total area updates even though nothing is added",
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
  "reporter": "Eli Cochran",
  "date": "2008-11-17T12:55:36.000-0500",
  "updated": "2008-12-03T11:59:35.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1811/",
      "key": "FLUID-1811"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-19T18:47:26.000-0500",
      "body": "changed code to only update the Files to Upload total field if the ReadyFiles() changes\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:59:35.000-0500",
      "body": "appears to be fixed\n"
    }
  ]
}
---
In Uploader 2, browse for a file that is larger than the 20MB limit, and click OK&#x20;

Notice: that when the dialog dismisses that the file total area changes to "To upload: 0 files (0.0 KB)".&#x20;

Fix is that we need to note that nothing has changed before updating that area of the UI

        