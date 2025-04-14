---json
{
  "title": "FLUID-3631",
  "summary": "Blue backgound of header is not replaced by either the medium contrast grey scale nor the low contrast themes",
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
  "date": "2010-04-12T15:44:29.000-0400",
  "updated": "2013-10-04T10:22:16.070-0400",
  "versions": [
    "1.2beta1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP)\\\nFF 3.6, IE 8 (Win 7)\\\nSafari 4 (Mac OS 10.5)\\\nFF 3.6, Safari 4 (Mac OS 10.6)&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3631/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-12T15:45:34.000-0400",
      "body": "screenshot-1 shows that the blue header is not replaced in the \"Medium contrast grey scale\" contrast theme.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:13:37.688-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:49:33.843-0400",
      "body": "We no longer offer medium-contrast themes in UIO.\n"
    }
  ]
}
---
Blue backgound of header is not replaced by either the medium contrast grey scale nor the low contrast themes

Steps to reproduce

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Click "Edit Appearance" to open UI Options

3\) change the contrast to either the "Medium Contrast Grey Scale" or the "Low Contrast" and save.

Notice that the blue background behind the the header remains. This is only changed in the high contrast themes.

        