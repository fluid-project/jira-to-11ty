---json
{
  "title": "FLUID-830",
  "summary": "Mulitple uploaders: cancel on one uploader cancels both.",
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
  "reporter": "Michelle D'Souza",
  "date": "2008-06-26T17:14:01.000-0400",
  "updated": "2011-02-22T16:27:47.265-0500",
  "versions": [
    "0.4beta1"
  ],
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
      "author": "Eli Cochran",
      "date": "2008-07-22T21:55:27.000-0400",
      "body": "Michelle, you're right that this is an artificial case. Currently the whenDone and whenCancel events just refresh the page. Since normally clicking Done and Cancel would do more (or less) than refreshing the page, I would say that this isn't really a bug. In order to make it clear, I've changed the example to not refresh the page but instead show an alert.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.263-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
This may be an issue with the example.&#x20;

        