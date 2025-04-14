---json
{
  "title": "FLUID-2106",
  "summary": "In the image-gallery, our primary server-side test bed for the Uploader, old versions of fluid-components sometimes stick around after rebuilding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-01-09T12:09:38.000-0500",
  "updated": "2010-12-22T15:38:24.094-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-22T15:38:24.091-0500",
      "body": "This issue was resolved several releases ago by introducing the clean-build-run.sh script.\n"
    }
  ]
}
---
As part of the image-gallery build process, maven explodes the fluid-components war file into the source tree of the image-gallery. If this isn't deleted before rebuilding, old versions of fluid-components tend to stick around even after a clean build.

At very least, we should include a shell script that makes this a bit easier to handle for developers.

        