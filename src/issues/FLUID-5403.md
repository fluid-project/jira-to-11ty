---json
{
  "title": "FLUID-5403",
  "summary": "Contrast not applied to entire page for full page UIO",
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
  "date": "2014-06-04T10:52:12.777-0400",
  "updated": "2015-06-15T15:12:35.087-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Chrome 35, Safari 7 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5403/screenshot.png",
      "filename": "screenshot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5403/screenshot1.png",
      "filename": "screenshot1.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-04T10:54:05.011-0400",
      "body": "screenshot.png shows the improper styling when contrast is applied\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-04T11:00:23.470-0400",
      "body": "screenshot1.png shows the issue in safari. It is likely the same problem, but to a much smaller degree.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T15:12:35.085-0400",
      "body": "Could not reproduce in Safari 8 and Chrome 43\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open a full page version of UIO\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreview.html> \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreviewSchema.html> \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreview.html> \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreviewSchema.html>&#x20;

2\) Change the contrast

3\) save and apply the changes\
Notice that the bottom of the page hasn't been properly restyled.\
If you refresh the page, the styles are applied properly

        