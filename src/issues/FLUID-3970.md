---json
{
  "title": "FLUID-3970",
  "summary": "IE8 with flash 9 - uploader gives error and browse can't be used",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "heidi valles",
  "date": "2010-12-20T15:20:51.291-0500",
  "updated": "2010-12-20T19:12:33.628-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Win XP, IE8, Flash 9,0,115,0\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3970/FLUID-3970.patch",
      "filename": "FLUID-3970.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-20T17:37:22.300-0500",
      "body": "This patch fixes two bugs in our Flash 9 support: 1. We were pulling styles from the wrong nickname in the demands block for flash9SetupDOM and 2. we weren't providing a button peer ID, causing SWFUpload to freak.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-20T19:12:22.906-0500",
      "body": "Patch committed at r10445, reviewed by Antranig (<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2010-12-20>)\n"
    }
  ]
}
---
On loading <http://build.fluidproject.org/infusion/demos/uploader/demo.html> , I get the error:

"'flash9Container' is null or not an object"\
Flash9UploaderSupport.js, Line 29 Char 9

When I click on the Browse button, nothing happens.

        