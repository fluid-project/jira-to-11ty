---json
{
  "title": "FLUID-5410",
  "summary": "If the volume value is saved at 0, the adjuster will render with the text field empty",
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
  "date": "2014-06-06T09:43:57.324-0400",
  "updated": "2015-06-26T10:01:36.676-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "Textfield Slider"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5410/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-06T09:44:37.041-0400",
      "body": "screenshot.png shows the textfield accompanying the volume slider is empty when the value is set to 0.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T15:18:57.196-0400",
      "body": "Could not reproduce with Safari 8 or FF 38\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:55.290-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the conditional panel instructional demo

2\) Open "show preferences"

3\) Enable "speak text"

4\) set the volume to 0

5\) Refresh the page or close "show preferences"

6\) Open "show preferences"\
Notice that the textfield beside the volume slider is empty.

        