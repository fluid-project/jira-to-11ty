---json
{
  "title": "FLUID-2257",
  "summary": "Items in the preview window should not be in the tab order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-02-18T09:09:29.000-0500",
  "updated": "2013-10-04T10:31:00.369-0400",
  "versions": [
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4087/",
      "key": "FLUID-4087"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4087/",
      "key": "FLUID-4087"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:42:21.059-0400",
      "body": "whether or not this is actually an issue could be debatable\n"
    }
  ]
}
---
Items in the preview window should not be in the tab order. The container should be focusable and allow for scrolling if necessary.

Steps to reproduce:

1\) Open the UI Options example or the Sakai mock-up\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Open the UI Options dialog (Sakai mock-up only) by clicking on the "Edit Appearance" button

3\) Tap the 'tab' key repeatedly to cycle through all of the elements in the tab order

Notice that the elements in the preview pane are part of the tab order

        