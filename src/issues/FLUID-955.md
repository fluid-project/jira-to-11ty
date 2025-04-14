---json
{
  "title": "FLUID-955",
  "summary": "Can only tab to the buttons in uploader on first tab cycle, using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-21T15:54:09.000-0400",
  "updated": "2008-08-01T09:31:42.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-956/",
      "key": "FLUID-956"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-01T09:31:42.000-0400",
      "body": "Appears to have been resolved with the changes made before the release of 0.4\n\nVerified using IE6, IE7 (Win XP)\n"
    }
  ]
}
---
Can only tab to the buttons in uploader on first tab cycle

Steps to reproduce:

1\) Open either version of the uploader demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Click the "Add Files" button

3\) Tap the tab key. Notice that after cycling through all the elements  once, you are unable to tab back to any of the uploader's buttons

        