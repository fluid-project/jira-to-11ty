---json
{
  "title": "FLUID-1238",
  "summary": "Break out the options merging code from initView so that non-View objects can access its functionality without getting an empty DOM binder.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-08-19T14:51:42.000-0400",
  "updated": "2011-02-22T16:27:44.322-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-08-19T15:12:03.000-0400",
      "body": "Created a new mergeComponentOptions() function.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.321-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, initView() does three things:

1\. It looks up the component defaults and merges them with user-specified options, attaching the options to the instance\
2\. It creates a DOM binder and attaches it to the instance

It would be helpful to have the options merging code split out from the rest of initView so that non-View objects (such as the new UploadManager) can take advantage of this functionality for free.

        