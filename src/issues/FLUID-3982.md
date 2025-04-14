---json
{
  "title": "FLUID-3982",
  "summary": "Demo: focus styling missing from \"edit appearance\" button when in simplified layout",
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
  "date": "2010-12-20T22:17:45.344-0500",
  "updated": "2013-10-04T10:06:28.566-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE 9, FF 4 (Win 7)\\\nFF4 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:59:17.659-0400",
      "body": "Simplified layout is no longer offered by UIO.\n"
    }
  ]
}
---
In simplified layout, there is no focus styling applied to the "edit appearance" button

Steps to reproduce:

1\) Open the Sakai UI Options demo\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Open the UI Options control panel, turn on simplified layout and save

3\) Using the keyboard attempt to focus the "Edit Appearance" button. \
Notice that it doesn't get any focus styling. If you can determine when it has focus you can still use the keyboard to open it.

        