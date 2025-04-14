---json
{
  "title": "FLUID-4169",
  "summary": "All Views must now link to DataBinding.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Harris Wong",
  "reporter": "Justin Obara",
  "date": "2011-03-30T17:02:18.621-0400",
  "updated": "2011-07-08T16:10:02.978-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4214/",
      "key": "FLUID-4214",
      "summary": "The dropdown inlineEdit and simple-progress manual tests are missing the DataBinding.js dependency"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-16T15:43:50.650-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-27T16:17:23.270-0400",
      "body": "Checked demo and unit tests.  Unit tests also passed fine on the ones without DataBinding.js. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T13:10:20.560-0400",
      "body": "DataBinding.js are included in the following:\n\nstandalone-demos\\\nintegration-demos\\\ndemos\n\nmanual-tests\\\ncomponent-tests\\\nframework-tests\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T14:03:48.637-0400",
      "body": "All the issues have been caught. &#x20;\n"
    }
  ]
}
---
All "Model" components, which include "View" components now, require DataBinding.js as a dependency. We should update all demos and unit tests to make sure that this dependency is present.

        