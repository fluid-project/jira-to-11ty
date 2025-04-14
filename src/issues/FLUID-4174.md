---json
{
  "title": "FLUID-4174",
  "summary": "Uploader's 1.2 compatibility support for transforming options from the 1.2 syntax to 1.3 is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-04-04T16:54:47.318-0400",
  "updated": "2011-05-18T12:53:41.785-0400",
  "versions": [
    "1.4"
  ],
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
      "author": "Harris Wong",
      "date": "2011-05-16T15:43:25.724-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-05-18T12:53:22.967-0400",
      "body": "This was fixed and pushed to the project repo at this revision: <https://github.com/fluid-project/infusion/commit/b1dff44549364139e4e8722eefa7085752daa90d>\n"
    }
  ]
}
---
Uploader includes a file called UploaderCompatibility-Infusion1.2.js, which includes code to transform old 1.2-era options into the newer syntax introduced in Infusion 1.3.

Unfortunately, it monkey patches fluid.multiFileUploader(). With new changes to how Uploader instantiates itself with IoC, this strategy no longer works, and the feature is broken.

        