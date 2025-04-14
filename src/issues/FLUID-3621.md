---json
{
  "title": "FLUID-3621",
  "summary": "The text in buttons does not change size.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2010-04-09T10:50:13.000-0400",
  "updated": "2011-09-06T13:53:57.240-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP) \\\nFF 3.6, IE 8 (Win 7) \\\nSafari 4 (Mac OS 10.5) \\\nFF 3.6, Safari 4 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3621/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-09T10:50:58.000-0400",
      "body": "screenshot-1 shows the font size in the buttons unchanged.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-06T13:53:57.229-0400",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-4376#icft=FLUID-4376>\n"
    }
  ]
}
---
The text in buttons does not change size

Steps to reproduce

1\) Open the ui options demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/demo.html>

2\) Click "Edit Appearance" to open ui options

3\) Change the maximum font size (easiest to see if you make it the largest possible font size), and save the change.

Notice that the font size has changed, except for the buttons.

        