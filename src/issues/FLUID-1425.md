---json
{
  "title": "FLUID-1425",
  "summary": "Uploader 2: Provide a central point for instantiating an uploader and registering both options and callbacks.",
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
  "date": "2008-09-03T18:37:19.000-0400",
  "updated": "2011-02-22T16:27:46.552-0500",
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
      "date": "2008-10-01T13:50:01.000-0400",
      "body": "dev-iteration44\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-21T11:41:54.000-0400",
      "body": "The event-handling infrastructure is now in place, and the responsibilities are well separated between Uploader, FileQueueView, and UploadManager.\n\nUploader's main responsibility is to provide a central point for registering events and options. It then passes these things off to its children as necessary.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:46.474-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Uploader 2 needs a central component object that is designed to glue each of the sub-views together, providing once place for the user to go to specify configuration options and callbacks. This is the "controller layer" for the Uploader, and should hopefully feed new behaviour into the framework. Good frameworks should take away glue code, and controllers are all about glue.

        