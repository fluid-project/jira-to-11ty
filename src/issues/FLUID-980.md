---json
{
  "title": "FLUID-980",
  "summary": "Make file rows deletable with the Delete/Apple-Delete keys",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-07-22T18:47:35.000-0400",
  "updated": "2011-02-22T16:27:52.653-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-23T18:22:53.000-0400",
      "body": "Deletable with \"DELETE\", although I cannot verify Apple-DELETE on my systems...\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.652-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Once we can select each file row with the arrow keys, we need to provide a keyboard-only way of removing files. We can support this by making the rows "activatable" with the Delete and Apple-Delete key combinations.

This will require us to override the default activation key bindings for our particular instance of the keyboard-a11y plugin.

        