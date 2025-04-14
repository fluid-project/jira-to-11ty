---json
{
  "title": "FLUID-5404",
  "summary": "Line spacing misaligns the position of labels and icons used in full page UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2014-06-04T11:05:00.135-0400",
  "updated": "2024-07-22T15:17:23.811-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5404/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-04T11:06:04.299-0400",
      "body": "screenshot.png shows the labels and icons misaligned when line spacing is set.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:17:14.359-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open one of the full page uiOptions manual tests \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreview.html> \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreviewSchema.html> \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreview.html> \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreviewSchema.html>&#x20;

2\) Increase the line spacing

3\) Save and apply the change\
Notice that the labels for the checkboxes as well as the icons used on the page are all misaligned.

        