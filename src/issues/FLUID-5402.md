---json
{
  "title": "FLUID-5402",
  "summary": "table of contents toggle styling is broken when linespacing changed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-04T10:33:05.052-0400",
  "updated": "2024-07-22T15:15:12.963-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5686/",
      "key": "FLUID-5686"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5402/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-05T13:03:06.796-0400",
      "body": "screenshot.png shows the misaligned table of contents toggle, when line spacing is increased.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-09T13:08:42.896-0400",
      "body": "Probably just missing stylesheets.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:15:12.963-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open one of the full page uiOptions manual tests\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreview.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreviewSchema.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreview.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreviewSchema.html>

2\) Change the line spacing to 2

3\) Save and apply the changes.\
Notice that the the slider and "off" label for the table of contents are misaligned

        