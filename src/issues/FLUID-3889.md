---json
{
  "title": "FLUID-3889",
  "summary": "After uploading files, status doesn't update",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-12-09T16:15:06.292-0500",
  "updated": "2010-12-10T10:37:59.138-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3889/FLUID-3889.patch",
      "filename": "FLUID-3889.patch"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-12-09T17:50:21.873-0500",
      "body": "Update the progress text of the uploader in the DOM.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-09T17:50:45.836-0500",
      "body": "Update the progress text of the uploader in the DOM.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-09T18:37:08.494-0500",
      "body": "Removed previous hacky patch.   Included the proper patch.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-10T10:37:12.201-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-10T10:37:17.028-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-10T10:37:59.131-0500",
      "body": "Michelle reviewed and committed\n"
    }
  ]
}
---
Add files, then upload them. The status still stays at "To upload: 2 files (11.4 KB)"

        