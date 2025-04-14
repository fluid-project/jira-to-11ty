---json
{
  "title": "FLUID-3413",
  "summary": "Unit tests are broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-07T09:39:58.000-0500",
  "updated": "2009-12-10T21:02:01.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T09:42:54.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-08T14:15:35.000-0500",
      "body": "Fixed all but one set of broken tests. Have altered what is expected to be displayed upon rendering in the area of module names and descriptions. Have left the group description tests for now, as the group description has been removed from the main interface. Will have to add this back programmatically for the tests.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-08T15:43:22.000-0500",
      "body": "removed the final broken tests.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-10T21:02:01.000-0500",
      "body": "I've reviewed Laurel's fixes and the tests are indeed passing again with the exception of this known issue:\n\n<http://issues.fluidproject.org/browse/FLUID-3231>\n\nWe're good to go on this one.\n"
    }
  ]
}
---
With the re-design of the builder interface, it looks like many of the unit tests are broken. These will need to be corrected before release.

        