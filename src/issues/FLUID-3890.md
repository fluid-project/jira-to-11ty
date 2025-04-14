---json
{
  "title": "FLUID-3890",
  "summary": "Focus style stays on \"add more\" when upload button focused",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "heidi valles",
  "date": "2010-12-09T16:32:56.873-0500",
  "updated": "2011-09-13T10:23:40.079-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-12-21T16:10:26.928-0500",
      "body": "Can no longer replicate.  This JIRA may have been fixed as a side-effect. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-22T13:05:14.523-0500",
      "body": "Still persists in Mac OS + FF.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-22T13:12:21.215-0500",
      "body": "Can replicate with keyboard only.\n"
    }
  ]
}
---
After clicking the browse or add more button and choosing files, focus moves to the Upload button but focus styling remains on the add more button.

        