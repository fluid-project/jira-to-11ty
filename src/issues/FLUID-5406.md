---json
{
  "title": "FLUID-5406",
  "summary": "Reset doesn't remove contrast theme background",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-06-05T12:52:01.918-0400",
  "updated": "2024-07-22T15:18:58.354-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE 11 (Windows 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5446/",
      "key": "FLUID-5446"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5406/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-05T12:53:08.351-0400",
      "body": "screenshot.png shows the background from the previous contrast theme still present after reseting the preference settings.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T13:00:49.895-0400",
      "body": "Also happens on the full with preview examples.\\\n<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreview.html>\\\n<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreviewSchema.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:18:58.354-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the full page UIO manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage/>

2\) Change the contrast theme (e.g. light grey on dark grey)

3\) save and apply the changes.\
Notice that everything looks good

4\) Reset and apply changes\
Notice that the background of the page remains in the previously selected contrast theme's style

If you refresh the page or click on reset and apply again, the page styling will be corrected.

        