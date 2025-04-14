---json
{
  "title": "FLUID-4524",
  "summary": "\"continuum\" user ID needs write permission on builder cache directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Aaron Huslage",
  "reporter": "Cindy Li",
  "date": "2011-10-14T11:23:03.154-0400",
  "updated": "2013-09-06T13:51:42.057-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Aaron Huslage",
      "date": "2011-10-14T11:46:07.759-0400",
      "body": "This has been fixed. You should have access to write/read/delete for this directory.\n"
    }
  ]
}
---
The builder cache directory that "continuum" needs permission on: /home/continuum/builder.fluidproject.org/website/infusionBuilder-secure/cache

The files in this directory are created by web request, owned by "www-data", which "continuum" does not have write/delete permissions on.

        