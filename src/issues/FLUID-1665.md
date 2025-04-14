---json
{
  "title": "FLUID-1665",
  "summary": "Storycard:  \"Remove\" button should not display once files are being uploaded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Daphne Ogle",
  "date": "2008-10-07T17:55:32.000-0400",
  "updated": "2011-02-22T16:27:53.536-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-07T11:48:13.000-0500",
      "body": "Fixed in Uploader 2, the Remove button is dimmed and inactive during upload in Uploader 2.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.534-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Details:

* The user cannot remove files once upload has begun. Do not display the remove button/icon once the upload has begun.

Storyboard:  <http://wiki.fluidproject.org/display/fluid/Uploader+Storyboard+-+Simple+Upload>

        