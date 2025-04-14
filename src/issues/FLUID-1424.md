---json
{
  "title": "FLUID-1424",
  "summary": "Uploader 2: Allow implementers to specify their own callbacks during the various UploadManager interesting moments.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-09-03T18:03:16.000-0400",
  "updated": "2011-02-22T16:27:57.266-0500",
  "versions": [],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-01T13:49:03.000-0400",
      "body": "dev-iteration45\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-09T23:23:44.000-0400",
      "body": "This was implemented through the use of Fluid's model events system.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.265-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The UploadManager provides a set of callbacks for various interesting upload-related events, including files being cued, their progress as they're uploaded, etc. Implementers of the Upload component should be able to tap into these events, too, but without breaking any code internal to the Uploader that may also depend on these functions.

This will require a bit of framework support to allow for definition of simple aspects.

        