---json
{
  "title": "FLUID-996",
  "summary": "Inline edit unit tests fail in FF",
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
  "date": "2008-07-23T17:33:19.000-0400",
  "updated": "2008-07-28T09:28:01.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-996/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T17:34:15.000-0400",
      "body": "'screenshot-1' shows the failed unit tests.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T09:28:01.000-0400",
      "body": "Appears fixed in latest build\n\nVerified using:\n\nFF2, FF3 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
The inline edit unit tests fail in FF.

Unit tests:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/InlineEdit-test.html>

Fails all of test 14, 15, and 16.

        