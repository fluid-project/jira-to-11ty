---json
{
  "title": "FLUID-1673",
  "summary": "Uploader 2: Add Google Gears support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-09T23:42:58.000-0400",
  "updated": "2010-12-22T15:35:06.704-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3290/",
      "key": "FLUID-3290"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-09T23:43:24.000-0400",
      "body": "infusion-06-wishlist\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T15:35:06.702-0500",
      "body": "Google Gears has been deprecated by Google in favour of HTML 5. This issue has been superseded by <https://fluidproject.atlassian.net/browse/FLUID-3718#icft=FLUID-3718>.\n"
    }
  ]
}
---
Google Gears 0.4 and beyond offer file upload capabilities. Given the instability regarding Flash 10 and file uploads, we should add a new GearsUploadManager to our Uploader in order to support several strategies for multi-file upload. If successful Gears  could become our preferred mode for file upload in the future.

dev-iteration46

        