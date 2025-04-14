---json
{
  "title": "FLUID-3200",
  "summary": "cached files are unreachable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-22T15:40:33.000-0400",
  "updated": "2009-09-30T11:42:05.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-23T12:02:25.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-23T12:08:31.000-0400",
      "body": "changed the permissions for mkdir from 755 to 0755, which corrected the problem.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T11:42:05.000-0400",
      "body": "Jacob reviewed\n"
    }
  ]
}
---
Currently the mkdir function in php seems to create directories with a permission of d-wxr----t - this is not ideal, as I cannot delete the files or remove the directory without writing a php script to do so. While this is not a critical issue, it is something that should be resolved, so that the fluid user can delete the cached files when we want a refreshed copy.

        