---json
{
  "title": "FLUID-4214",
  "summary": "The dropdown inlineEdit and simple-progress manual tests are missing the DataBinding.js dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-05-11T10:20:19.613-0400",
  "updated": "2024-07-22T09:42:51.981-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4169/",
      "key": "FLUID-4169"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-11T10:25:54.764-0400",
      "body": "Added in the missing dependency and pushed to the project repo at 1c4ea5788dfad951390845f331f1ad4bbf9d80db\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-11T10:26:43.870-0400",
      "body": "reopened to add the fix for version number. now closing again\n"
    }
  ]
}
---
The DataBinding.js file needs to be linked into dropdown.html and simple-progress.html in the manual-tests/html directory.

Without this file they are failing with the following error.

Line: 1060\
File: Fluid.js\
Error: fluid.makeChangeApplier is not a function

        